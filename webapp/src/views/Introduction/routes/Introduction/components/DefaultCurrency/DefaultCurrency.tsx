import { UpdateUserMutation, UpdateUserMutationVariables } from '__generated__/graphql';
import { useMutation } from '@apollo/client';
import { Box, Button, Heading, Loader, Select, Spacer, Text } from 'components/atoms';
import { CURRENCIES_ARRAY } from 'constants/selectors/currencies';
import { useUserContext } from 'contexts/UserContext';
import { motion } from 'framer-motion';
import { UPDATE_USER } from 'graphql/mutations/common/UpdateUser';
import { showErrorToast } from 'helpers/showToast';
import { useSelect } from 'hooks/useSelect';
import { useMemo } from 'react';
import { useForm } from 'react-hook-form';
import { Trans, useTranslation } from 'react-i18next';
import { useIntroductionContext } from 'views/Introduction/routes/Introduction/context';

export const DefaultCurrency = () => {
  const { t } = useTranslation();

  const { updateState, actions } = useIntroductionContext();

  const { user, updateUser: updateUserGlobal } = useUserContext();

  const items = useMemo(
    () =>
      CURRENCIES_ARRAY.map(currency => ({
        label: t(`currency.${currency}`),
        value: currency,
      })),
    [t],
  );

  const defaultValues = {
    defaultCurrency: user.defaultCurrency,
  };

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<typeof defaultValues>({
    defaultValues,
    mode: 'onChange',
  });

  const defaultCurrencySelectProps = useSelect<typeof defaultValues>({
    register,
    name: 'defaultCurrency',
    errors,
  });

  const [updateUser] = useMutation<UpdateUserMutation, UpdateUserMutationVariables>(UPDATE_USER, {
    onCompleted: data => {
      updateUserGlobal({
        defaultCurrency: data.updateUser.defaultCurrency,
        introductionStep: data.updateUser.introductionStep,
      });

      updateState(actions.CHANGE_TO_ADD_CASH_ACCOUNTS);
    },
    onError: () => {
      showErrorToast(t('service.unknown_error'));
    },
  });

  const onSubmit = async (data: typeof defaultValues) => {
    await updateUser({
      variables: {
        data,
      },
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0 }}
    >
      <Box
        $flex
        $flexDirection="column"
      >
        <Heading $textAlign="center">{t('page.introduction.default.currency.title')}</Heading>

        <Spacer $space="0.5" />

        <Text
          $fontSize="0.875"
          $fontColor="gray400"
          $textAlign="center"
        >
          <Trans
            i18nKey="page.introduction.default.currency.description"
            components={{
              bold: (
                <Text
                  $fontSize="0.875"
                  $fontColor="gray400"
                  $textAlign="center"
                  $fontWeight="700"
                />
              ),
            }}
          />
        </Text>

        <Spacer $space="1.5" />

        <form
          onSubmit={handleSubmit(onSubmit)}
          noValidate
        >
          <Select
            items={items}
            {...defaultCurrencySelectProps}
          />

          <Spacer $space="1.5" />

          <Button
            $size="large"
            type="submit"
            disabled={isSubmitting}
            $width="100%"
          >
            {isSubmitting ? <Loader color="white" /> : t('page.introduction.next.step.submit')}
          </Button>
        </form>
      </Box>
    </motion.div>
  );
};
