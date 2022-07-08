import React from 'react';
import * as Styled from '../AdoptionForm/styled';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { countStep } from '../../store/modules/adoption';
import { useDispatch } from 'react-redux';

const validationSchema = Yup.object({
	assinatura: Yup.string().min(6, 'Assinatura').required('*'),
});

export default function AdoptionStep4({ setStep, formValues, setFormValues }) {
	const formObject = JSON.parse(localStorage.getItem('form'));
	const { register } = useForm();
	const dispatch = useDispatch();

	const formik = useFormik({
		initialValues: {
			assinatura: `${formObject.assinatura ?? ''}`,
		},

		validationSchema,

		onSubmit: values => {
			setFormValues({
				...formValues,
				...values,
			});

			setStep(5);
			dispatch(countStep({ step: 5 }));

			const currentForm = Object.assign(formObject, { ...values });
			localStorage.setItem('form', JSON.stringify(currentForm));
		},
	});

	return (
		<Form onSubmit={formik.handleSubmit}>
			<Styled.ContainerForm>
				<p>
					{' '}
					Ao adotar o animal descrito declaro-me apto para assumir a guarda e a
					responsabilidade sobre este animal, eximindo o doador de toda e
					qualquer responsabilidade por quaisquer atos praticados pelo animal a
					partir desta data. Declaro ainda estar ciente de todos os cuidados que
					este animal exige no que se refere à sua guarda e manutenção, além de
					conhecer todos os riscos inerentes à espécie no convívio com humanos,
					estando apto a guardá-lo e vigiá-lo, comprometendo-me a proporcionar
					boas condições de alojamento e alimentação, assim como, espaço físico
					que possibilite o animal se exercitar. Responsabilizo-me por preservar
					a saúde e integridade do animal e a submetê-lo aos cuidados médico
					veterinários sempre que necessário para este fim. Comprometo-me a não
					transmitir a posse deste animal a outrem sem o conhecimento do doador.
					Comprometo-me também, a permitir o acesso do doador ao local onde se
					encontra o animal para averiguação de suas condições. Tenho
					conhecimento de que caso seja constatado por parte do doador situação
					inadequada para o bem estar do animal, perderei a sua guarda, sem
					prejuízo das penalidades legais. Comprometo-me ainda em ESTERILIZAR
					(castrar) o animal adotado , se o doador já não o tiver feito,
					contribuindo assim para o controle da população de animais domésticos.
					Comprometo-me a cumprir toda a legislação vigente, municipal, estadual
					e federal, relativa à posse de animais. Declaro-me assim, ciente das
					normas acima, as quais aceito, assinando o presente Termo de
					Responsabilidade, assumindo plenamente os deveres que dele constam,
					bem como outros relacionados à posse responsável e que não estejam
					incluídos neste Termo. Abandonar ou maltratar animais é crime. Pena: 3
					meses a 1 ano de detenção e multa (Lei Federal 9605/98). 
				</p>
				<Styled.InputContainer>
					<Styled.Label htmlFor="assinatura">Assinatura</Styled.Label>
					{formik.errors.assinatura && (
						<small>{formik.errors.assinatura}</small>
					)}
					<Styled.SInput
						type="text"
						name="assinatura"
						id="assinatura"
						placeholder="Assinatura"
						{...register('assinatura')}
						value={formik.values.assinatura}
						onChange={formik.handleChange}
					/>
				</Styled.InputContainer>
			</Styled.ContainerForm>

			<Styled.ButtonContainer className="my-5">
				<Styled.SButton
					variant="primary"
					type="button"
					onClick={() => {
						setStep(3);
						dispatch(countStep({ step: 3 }));
					}}
				>
					Voltar
				</Styled.SButton>
				<Styled.SButton variant="primary" type="submit">
					Concluir
				</Styled.SButton>
			</Styled.ButtonContainer>
		</Form>
	);
}
