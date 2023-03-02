import React, { Component } from 'react';
import { Button } from 'primereact/button';
import { Password } from 'primereact/password';
import { InputText } from 'primereact/inputtext';
import { Dialog } from 'primereact/dialog';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            displayBasic: false,
            displayBasic2: false,
            displayModal: false,
            displayMaximizable: false,
            displayPosition: false,
            displayResponsive: false,
            position: 'center',
            mailUser: '',
            passwordUser: ''
        };

        this.onClick = this.onClick.bind(this);
        this.onHide = this.onHide.bind(this);
        this.login = this.login.bind(this);
    }

    onClick(name, position) {
        let state = {
            [`${name}`]: true
        };

        if (position) {
            state = {
                ...state,
                position
            }
        }

        this.setState(state);
    }

    onHide(name) {
        this.setState({
            [`${name}`]: false
        });
    }

    renderFooter(name) {
        return (
            <div>
                <Button label="Entendido" icon="pi pi-check" onClick={() => this.onHide(name)} autoFocus />
            </div>
        );
    }

    login(){
        const {mailUser, passwordUser} = this.state;
        axios.post('http://localhost:4000/login',{mailUser,passwordUser, }, {withCredentials: true}).then((data) => this.props.navigate('/dashboard'))
    }

    render() {
        return (
            <div>
                <div className=' flex align-items-center justify-content-center my-8'>
                    <div className="flex flex-column align-items-center justify-content-center">
                        <div className="gray-color py-8 px-5 sm:px-8 rounded">
                            <div className="text-center mb-5">
                                <div className="text-900 text-3xl font-medium mb-3">Bienvenido a S.G.R.I.</div>
                                <span className="text-600 font-medium">Ingrese sus credenciales para continuar</span>
                            </div>
                            <div>
                                <label htmlFor="email1" className="block text-900 text-xl font-medium mb-2">Correo electrónico</label>
                                <InputText inputid="email1" value={this.state.mailUser} onChange={(e) => this.setState({mailUser: e.target.value})} type="text" placeholder="Email address" className="w-full md:w-30rem mb-5" required />
                                <label htmlFor="password1" className="block text-900 font-medium text-xl mb-2">Contraseña</label>
                                <Password inputid="password1" value={this.state.passwordUser} onChange={(e) => this.setState({passwordUser: e.target.value})} placeholder="Password" toggleMask feedback={false} className="w-full mb-5" inputClassName='w-full p-3 md:w-30rem' required/>
                                <div className="flex align-items-center justify-content-end mb-5 gap-5">
                                    <Button label="Olvide mi contraseña" icon="pi pi-external-link" onClick={() => this.onClick('displayBasic')} />
                                    <Dialog header="¿Problemas con tu contraseña?" visible={this.state.displayBasic} style={{ width: '50vw' }} footer={this.renderFooter('displayBasic')} onHide={() => this.onHide('displayBasic')}>
                                        <p className='alert-password text-center'>Hola, parece que estás en un apuro. <br/>Para cambiar tu contraseña será necesario que te comuniques con la administración
                                            para hacer el cambio de contraseña desde el sistema principal.<br/>Esperamos que se pueda resolver pronto.</p>
                                    </Dialog>
                                </div>
                                <Button label="Iniciar sesión" className="w-full p-3 text-xl p-button-success" onClick={this.login}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

function LoginWithNavigate () {
    const navigate = useNavigate();
    return <Login  navigate={navigate} />
}
 
export default LoginWithNavigate;