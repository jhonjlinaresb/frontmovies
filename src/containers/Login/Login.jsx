import React from 'react';
import { useHistory } from 'react-router-dom'
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
const Login = ({setUser}) => {
    const history = useHistory();
    const onFinish = (user) => {
        axios.post(process.env.REACT_APP_BASE_URL+'/user/login', user)
            .then(res => {
            setUser(res.data.user) 
            localStorage.setItem('authToken',res.data.token);
            localStorage.setItem('user',JSON.stringify(res.data.user))
            notification.success({message:'Bienvenido',description:'Bienvenido '+user.email})
            setTimeout(() => {
                history.push('/')
            }, 1000);
        })
        .catch(error=>console.log(error))
    }
    return (
        <div className="formContainer">
        <Form
            {...layout}
            name="basic"
            initialValues={{
                remember: true,
            }}
            onFinish={onFinish}
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