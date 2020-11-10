import React from 'react';
import { Form, Input, Button, notification } from 'antd';
import './Login.scss'
import axios from 'axios';

const layout = {
    labelCol: {
        span: 8,
    },
    wrapperCol: {
        span: 16,
    },
};
const tailLayout = {
    wrapperCol: {
        offset: 8,
        span: 16,
    },
};
const Login = () => {
    const onFinish = (user) => {
        axios.post(process.env.REACT_APP_BASE_URL+'/users/login', user)
            .then(res => {
                console.log(res.data)
                notification.success({ message :'Bienvenido a RENTALMOVIES',description:'Usuario logueado con éxito'})
            }).catch(error => {
                notification.error({ message: 'Error en el registro', description: 'Hubo un error al tratar de registrar al usuario, revisa tus campos' })
            })
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
    return (
        <div className="formContainer">
        <Form
            {...layout}
            name="basic"
            initialValues={{
                remember: true,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
        >

            <Form.Item
                name="email"
                rules={[
                    {
                        required: true,
                        message: 'Por favor introduzca su email!',
                    },
                    {
                        type:'email',
                        message: 'El email que ha rgistrado',
                    }
                ]}
            >
                <Input placeholder="EMAIL"/>
            </Form.Item>

            <Form.Item
                name="password"
                rules={[
                    {
                        required: true,
                        message: 'Por favor introduzca su contraseña!',
                    },
                    {
                        pattern:/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,10}$/, 
                        message: 'Su contraseña debe contener al menos una minúscula, una mayúscula, un número,un carácter especial, y debe estar entre 8 y 10 carácteres de longitud!',
                    }
                ]}
            >
                <Input.Password placeholder="PASSWORD"/>
            </Form.Item>

            <Form.Item {...tailLayout}>
                <Button type="primary" htmlType="submit">
                    Login
                </Button>
            </Form.Item>
        </Form>
        </div>
    )
}

export default Login;