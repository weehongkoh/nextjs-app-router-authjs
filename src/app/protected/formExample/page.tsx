'use client';

import React from 'react';
import { Form, Input, Button, Select, DatePicker, message, Card, Grid } from 'antd';
import { useSession } from 'next-auth/react';
import { useForm, Controller } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import dayjs from 'dayjs';

const { Option } = Select;
const { useBreakpoint } = Grid;

const schema = yup.object({
  name: yup.string().required('Nome é obrigatório'),
  email: yup.string().email('Email inválido').required('Email é obrigatório'),
  birthDate: yup.date().required('Data de nascimento é obrigatória'),
  gender: yup.string().required('Gênero é obrigatório'),
  bio: yup.string().required('Biografia é obrigatória').min(10, 'Biografia deve ter no mínimo 10 caracteres'),
}).required();

type FormData = yup.InferType<typeof schema>;

export default function FormExample() {
  const { data: session } = useSession();
  const screens = useBreakpoint();
  
  const { register, handleSubmit, formState: { errors }, control } = useForm<FormData>({
    resolver: yupResolver(schema),
    defaultValues: {
      name: session?.user?.name || '',
      email: session?.user?.email || '',
    }
  });

  const onSubmit = (data: FormData) => {
    console.log('Form values:', data);
    message.success('Formulário enviado com sucesso!');
  };

  return (
    <Card 
      title="Exemplo de Formulário" 
      style={{ 
        width: '100%',
        maxWidth: screens.md ? '600px' : '100%',
        margin: '0 auto'
      }}
    >
      <Form layout="vertical" onSubmitCapture={handleSubmit(onSubmit)}>
        <Form.Item
          label="Nome"
          validateStatus={errors.name ? 'error' : ''}
          help={errors.name?.message}
        >
          <Input {...register('name')} />
        </Form.Item>

        <Form.Item
          label="Email"
          validateStatus={errors.email ? 'error' : ''}
          help={errors.email?.message}
        >
          <Input {...register('email')} />
        </Form.Item>

        <Form.Item
          label="Data de Nascimento"
          validateStatus={errors.birthDate ? 'error' : ''}
          help={errors.birthDate?.message}
        >
          <Controller
            name="birthDate"
            control={control}
            render={({ field }) => (
              <DatePicker
                {...field}
                className="w-full"
                format="DD/MM/YYYY"
                value={field.value ? dayjs(field.value) : null}
                onChange={(date) => field.onChange(date?.toDate())}
              />
            )}
          />
        </Form.Item>

        <Form.Item
          label="Gênero"
          validateStatus={errors.gender ? 'error' : ''}
          help={errors.gender?.message}
        >
          <Controller
            name="gender"
            control={control}
            render={({ field }) => (
              <Select
                {...field}
                className="w-full"
                placeholder="Selecione seu gênero"
              >
                <Option value="male">Masculino</Option>
                <Option value="female">Feminino</Option>
                <Option value="other">Outro</Option>
                <Option value="prefer_not_to_say">Prefiro não dizer</Option>
              </Select>
            )}
          />
        </Form.Item>

        <Form.Item
          label="Biografia"
          validateStatus={errors.bio ? 'error' : ''}
          help={errors.bio?.message}
        >
          <Input.TextArea {...register('bio')} rows={4} />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" block>
            Enviar
          </Button>
        </Form.Item>
      </Form>
    </Card>
  );
}
