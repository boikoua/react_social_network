import React from 'react';
import style from './Logo.module.scss';

const Logo = ({ text }) => <p className={style.logo}>{text}</p>;

export default Logo;
