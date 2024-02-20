import {
	CashAccountCreateMutation,
	CashAccountCreateMutationVariables,
} from "__generated__/graphql";
import { useMutation } from "@apollo/client";
import {
	Button,
	Dialog,
	emitErrorToast,
	emitSuccessToast,
	Form,
	Input,
	Loader,
} from "@funds-tracker/ui";
import { yupResolver } from "@hookform/resolvers/yup";
import { CurrencyCombobox } from "components/CurrencyCombobox";
import { useUserContext } from "contexts/UserContext";
import { CASH_ACCOUNT_CREATE } from "graphql/mutations/cashAccounts/CashAccountCreate";
import { Plus } from "lucide-react";
import { ReactNode, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";

import {
	CashAccountCreateFormSchema,
	CashAccountCreateFormSchemaType,
} from "./CashAccountCreateFormSchema";

interface CashAccountCreateDialogProps {
	children: ReactNode;
	handleRefetch: () => void;
}

export const CashAccountCreateDialog = ({
	children,
	handleRefetch,
}: CashAccountCreateDialogProps) => {
	const [open, setOpen] = useState<boolean>(false);

	const { t } = useTranslation();

	const { user } = useUserContext();

	const defaultValues = {
		name: "",
		currency: user.defaultCurrency,
	} satisfies CashAccountCreateFormSchemaType;

	const form = useForm<CashAccountCreateFormSchemaType>({
		defaultValues,
		resolver: yupResolver(CashAccountCreateFormSchema),
	});

	const {
		control,
		handleSubmit,
		formState: { isSubmitting },
		reset,
	} = form;

	useEffect(() => {
		if (!open) {
			reset();
		}
	}, [open, reset]);

	const [cashAccountCreate] = useMutation<
		CashAccountCreateMutation,
		CashAccountCreateMutationVariables
	>(CASH_ACCOUNT_CREATE, {
		onCompleted: () => {
			handleRefetch();
			setOpen(false);
			emitSuccessToast(t("modal.CashAccountCreate.toast.success"));
		},
		onError: () => {
			emitErrorToast(t("service.unknown_error"));
		},
	});

	const onSubmit = async (data: CashAccountCreateFormSchemaType) => {
		await cashAccountCreate({
			variables: {
				data,
			},
		});
	};

	return (
		<Dialog
			open={open}
			onOpenChange={setOpen}
		>
			<Dialog.Trigger asChild>{children}</Dialog.Trigger>
			<Dialog.Content>
				<Dialog.Header>
					<Dialog.Title>{t("modal.CashAccountCreate.name")}</Dialog.Title>
					<Dialog.Description>{t("modal.CashAccountCreate.description")}</Dialog.Description>
				</Dialog.Header>
				<Form {...form}>
					<form onSubmit={handleSubmit(onSubmit)}>
						<div className="my-4 flex flex-col gap-4">
							<Form.Field
								control={control}
								name="name"
								render={({ field }) => (
									<Form.Item>
										<Form.Control>
											<Input
												autoFocus
												aria-label={t("common.input.name.placeholder")}
												placeholder={t("common.input.name.placeholder")}
												{...field}
											/>
										</Form.Control>
										<Form.Message />
									</Form.Item>
								)}
							/>

							<Form.Field
								control={control}
								name="currency"
								render={({ field }) => (
									<Form.Item>
										<Form.Control>
											<CurrencyCombobox {...field} />
										</Form.Control>
										<Form.Message />
									</Form.Item>
								)}
							/>
						</div>

						<Dialog.Footer>
							<Dialog.Close asChild>
								<Button
									variant="secondary"
									className="w-1/2"
								>
									{t("common.cancel")}
								</Button>
							</Dialog.Close>

							<Button
								className="flex w-1/2 items-center justify-center gap-2"
								disabled={isSubmitting}
								type="submit"
							>
								{isSubmitting ? <Loader /> : <Plus className="size-6" />}

								{t("add.cash.accounts.button.add")}
							</Button>
						</Dialog.Footer>
					</form>
				</Form>
			</Dialog.Content>
		</Dialog>
	);
};
