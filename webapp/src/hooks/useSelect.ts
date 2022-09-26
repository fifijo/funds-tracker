import {
  DeepRequired,
  FieldErrorsImpl,
  FieldValues,
  Path,
  PathValue,
  UseFormRegister,
} from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { get } from 'utils/get';

interface UseSelectProps<Fields extends FieldValues> {
  register: UseFormRegister<Fields>;
  name: Path<Fields>;
  defaultValues: Fields;
  errors: FieldErrorsImpl<DeepRequired<Fields>>;
}

export const useSelect = <Fields extends FieldValues>({
  register,
  name,
  defaultValues,
  errors,
}: UseSelectProps<Fields>) => {
  const { onChange: registerOnChange, ref, onBlur } = register(name);

  const onChange = (value: PathValue<Fields, Path<Fields>>) => {
    const e = {
      target: {
        name,
        value,
      },
    };

    registerOnChange(e);
  };

  const { t } = useTranslation();

  return {
    onChange,
    defaultValue: get(defaultValues, name) as keyof Fields,
    error: t(get(errors, name)?.message) || undefined,
    ref,
    onBlur,
  };
};
