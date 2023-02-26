import { Component } from "react";
import './style.css'

interface IUserBlockProps {
    name: string;
    textStatus: string;
    avatar: string;
    networkStatus: Boolean;
}

export default class Users extends Component<IUserBlockProps> {
    render() {
        const { name, textStatus, avatar, networkStatus } = this.props;

        return (
            <div className="user-block">
                <h1> Имя пользователя: {name}</h1>
                <h3> Текстовый статус: {textStatus}</h3>
                <img src={avatar} alt="user avatar" />
                <h3>Пользователь {networkStatus ? 'В сети' : 'Не в сети'}</h3>
            </div>
        );
    }

};

