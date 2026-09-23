import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { toast } from 'react-toastify'
import Cookies from 'js-cookie';
import { FiArrowLeft, FiEye, FiEyeOff } from 'react-icons/fi'
import CustomLogo from "@/components/atoms/CustomLogo";
import CustomLabel from "@/components/atoms/CustomLabel";
import CustomInput from "@/components/atoms/CustomInput";

export default function LoginForm() {
    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const router = useRouter();

    return (
        <main className="flex min-h-[calc(100vh-4rem)] items-center justify-center px-6 py-12">
            <form
                className="w-full max-w-sm rounded-2xl border border-line bg-paper p-8 shadow-md"
                onSubmit={(e) => {
                    e.preventDefault();
                    if (user && password) {
                        Cookies.set('SECRET_PASSWORD', password, {
                            expires: 30,
                            path: '/'
                        });
                        router.push('/admin/register')
                    } else {
                        toast.error('Informe usuário e senha')
                    }
                }}
            >
                <div className="flex items-center gap-3">
                    <CustomLogo />
                    <span className="rounded-full bg-accent/10 px-2.5 py-0.5 font-mono text-[11px] tracking-wide text-accent">
                        admin
                    </span>
                </div>

                <h1 className="mt-6 font-display text-2xl font-bold tracking-tight text-ink">
                    Área administrativa
                </h1>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                    Entre com a senha para gerenciar os registros do portfólio.
                </p>

                <div className="mt-8 flex flex-col gap-2">
                    <CustomLabel title="Usuário" />
                    <CustomInput
                        id="user"
                        name="user"
                        type="text"
                        value={user}
                        setValue={setUser}
                        placeholder="Seu usuário"
                    />
                </div>

                <div className="mt-5 flex flex-col gap-2">
                    <CustomLabel title="Senha" />
                    <div className="relative">
                        <CustomInput
                            id="password"
                            name="password"
                            type={showPassword ? 'text' : 'password'}
                            value={password}
                            setValue={setPassword}
                            placeholder="••••••••"
                            className="pr-11"
                        />
                        <button
                            type="button"
                            onClick={() => setShowPassword((v) => !v)}
                            aria-label={showPassword ? 'Ocultar senha' : 'Mostrar senha'}
                            className="absolute right-3 top-1/2 -translate-y-1/2 text-muted transition-colors hover:text-ink"
                        >
                            {showPassword ? <FiEyeOff size={17} /> : <FiEye size={17} />}
                        </button>
                    </div>
                </div>

                <button
                    className="mt-6 w-full rounded-full bg-ink px-5 py-2.5 text-sm font-medium text-paper transition-colors hover:bg-accent"
                    type="submit"
                >
                    Entrar
                </button>

                <Link
                    href="/"
                    className="mt-6 inline-flex items-center gap-1.5 text-sm text-muted transition-colors hover:text-accent"
                >
                    <FiArrowLeft size={14} /> Voltar para a home
                </Link>
            </form>
        </main>
    )
}
