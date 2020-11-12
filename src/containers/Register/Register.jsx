// import React from 'react'
// import { Form, Input, Button, Checkbox } from 'antd';
// import { UserOutlined, LockOutlined } from '@ant-design/icons';
//import './Register.scss'
// import { Link } from 'react-router-dom';


// const Register = () => {
//     const onFinish = (values) => {
//         console.log('Received values of form: ', values);
//     };

//     return (
//         <div className="formContainer">
//         <Form
//             name="normal_login"
//             className="login-form"
//             initialValues={{
//                 remember: true,
//             }}
//             onFinish={onFinish}
//         >
//             <Form.Item
//                 name="username"
//                 rules={[
//                     {
//                         required: true,
//                         message: 'Please input your Username!',
//                     },
//                 ]}
//             >
//                 <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
//             </Form.Item>
//             <Form.Item
//                 name="password"
//                 rules={[
//                     {
//                         required: true,
//                         message: 'Please input your Password!',
//                     },
//                 ]}
//             >
//                 <Input
//                     prefix={<LockOutlined className="site-form-item-icon" />}
//                     type="password"
//                     placeholder="Password"
//                 />
//             </Form.Item>
//             <Form.Item>
//                 <Form.Item name="remember" valuePropName="checked" noStyle>
//                     <Checkbox>Remember me</Checkbox>
//                 </Form.Item>

//                 <Link className="login-form-forgot" to="#">
//                     Forgot password
//         </Link>
//             </Form.Item>

//             <Form.Item>
//                 <Button type="primary" htmlType="submit" className="login-form-button">
//                     Log in
//         </Button>
//         Or <Link to="#">register now!</Link>
//             </Form.Item>
//         </Form>
//         </div>
//     );
// };

// export default Register;

import React from 'react';
import { Form, Input, Button, notification } from 'antd';
import './Register.scss'
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
const Register = () => {
    const onFinish = (user) => {
        axios.post(process.env.REACT_APP_BASE_URL+'/users/register', user)
            .then(res => {
                console.log(res.data)
                notification.success({ message :'Usuario registrado',description:'Usuario registrado con éxito'})
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
                name="name"
                rules={[
                    {
                        required: true,
                        message: 'Por favor introduzca su nombre!',
                    },
                ]}
            >
                <Input placeholder="NAME"/>
            </Form.Item>
            <Form.Item
                name="email"
                rules={[
                    {
                        required: true,
                        message: 'Por favor introduzca su email!',
                    },
                    {
                        type:'email',
                        message: 'El campo debe ser un email',
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
                    Submit
        </Button>
            </Form.Item>
        </Form>
        </div>
    )
}

export default Register;