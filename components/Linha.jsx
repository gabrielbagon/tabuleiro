import styles from '../styles/Linha.module.css';
import Subdivisao from './Subdivisao';

export default function Linha (props) {
    return (
        <>
        <div className={styles.linha}>
            <Subdivisao />
            <Subdivisao preto/>
            <Subdivisao />
            <Subdivisao preto />
            <Subdivisao />
            <Subdivisao preto/>
            <Subdivisao />
            <Subdivisao preto />
        </div>
        <div className={styles.linha2}>
        <Subdivisao preto/>
        <Subdivisao />
        <Subdivisao preto/>
        <Subdivisao  />
        <Subdivisao preto/>
        <Subdivisao />
        <Subdivisao preto/>
        <Subdivisao  />
    </div>
    </>
    )
}