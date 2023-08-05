import {
  Currency,
  GetInstrumentHistoryQuery,
  GetInstrumentHistoryQueryVariables,
} from '__generated__/graphql';
import { useLazyQuery } from '@apollo/client';
import { Box, Button, Icon, Input, Spreader } from 'components/atoms';
import { INSTRUMENT_HISTORY } from 'graphql/query/instruments/InstrumentHistory';
import { useBreakpoint } from 'hooks/useBreakpoint';
import { useCurrencyInput } from 'hooks/useCurrencyInput';
import { useUpdateEffect } from 'hooks/useUpdateEffect';
import { InvestFundsFormValues } from 'modals/InvestFunds/helpers/defaultValues';
import { FC, useCallback } from 'react';
import { useFormContext } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { FaSync } from 'react-icons/fa';

import { FormField } from '../FormField';

interface IPriceFieldProps {
  activeCurrency: Currency;
}

export const PriceField: FC<IPriceFieldProps> = ({ activeCurrency }) => {
  const { t } = useTranslation();

  const { setValue, watch, control } = useFormContext<InvestFundsFormValues>();

  const [getInstrumentHistory, { data }] = useLazyQuery<
    GetInstrumentHistoryQuery,
    GetInstrumentHistoryQueryVariables
  >(INSTRUMENT_HISTORY, {
    onCompleted: ({ instrumentHistory }) => {
      setValue('price', String(instrumentHistory.at(-1)?.close.toFixed(2)), {
        shouldDirty: true,
      });
    },
  });

  const watchInstrument = watch('instrument');
  const watchDate = watch('date');

  const updatePrice = useCallback(() => {
    if (watchInstrument?.Code && watchDate) {
      const sevenDaysAgo: Date = new Date(watchDate.getTime() - 7 * 24 * 60 * 60 * 1000);

      getInstrumentHistory({
        variables: {
          data: {
            code: watchInstrument.Code,
            exchange: watchInstrument.Exchange,
            from: sevenDaysAgo.toISOString(),
            to: watchDate.toISOString(),
            period: '1d',
          },
        },
      });
    }
  }, [getInstrumentHistory, watchDate, watchInstrument]);

  useUpdateEffect(() => {
    updatePrice();
  }, [updatePrice]);

  const isPhone = useBreakpoint('phone', 'max');

  const currencyInputProps = useCurrencyInput<InvestFundsFormValues>({ control, name: 'price' });

  const watchInstrumentCode = watch('instrument.Code');
  const watchPrice = watch('price');

  const priceChanged = watchPrice !== data?.instrumentHistory.at(-1)?.close.toFixed(2);

  return (
    <FormField
      label={t('modal.InvestFunds.form.label.price')}
      htmlFor="price"
    >
      <Box
        $flex
        $flexGrow={1}
        $width={isPhone ? '100%' : undefined}
      >
        <Input
          type="currency"
          $flexGrow={1}
          $width={isPhone ? '100%' : 'auto'}
          placeholder={t('modal.InvestFunds.form.input.price.placeholder')}
          currency={activeCurrency}
          {...currencyInputProps}
        />

        <Spreader $spread="0.25" />

        <Button
          $color="secondary"
          onClick={updatePrice}
          disabled={!watchInstrumentCode || !watchDate || !priceChanged}
        >
          <Icon icon={FaSync} />
        </Button>
      </Box>
    </FormField>
  );
};