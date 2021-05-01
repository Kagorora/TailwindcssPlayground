import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import './index.scss';

export default function Home() {
  return (
    <div className="h-screen w-screen bg-gray-100 flex items-center justify-center">
        <div className="login-container w-1/2 h-1/2 bg-gray-300">
            <h1>Login</h1>

        </div>
    </div>
  )
}
