import { useState, useContext, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { SyncOutlined } from "@ant-design/icons";
import Link from "next/link";
import { Context } from "../context";
import { useRouter } from "next/router";

const ForgotPassword = () => {
    const [email, setEmail] = useState('');
    const [success, setSuccess] = useState(false);
    const [code, setCode] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [loading, setLoading] = useState(false);

    const { state: { user} } = useContext(Context);
    const router = useRouter();

    useEffect(() => {
        if (user !== null) {
          router.push("/");
        }
    }, [user]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
          const { data } = await axios.post(`/api/forgot-password`, {
            email,
          });
          setSuccess(true);
          toast.success("Check your email for the secret code");
          setLoading(false);
        } catch (err) {
          toast.error(err.response.data);
          setLoading(false);
        }
    };

    return (
        <>
            <h1 className="p-5 text-center jumbotron">Forgot Password</h1>
            <div className="container col-md-4 offset-md-4 pb-5">
                <form onSubmit={handleSubmit}>
                    <input
                        type="email"
                        className="form-control mb-4 p-4"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter email"
                        required
                    />
                    <button
                        type="submit"
                        className="btn btn-primary btn-block"
                        disabled={!email || loading}
                    >
                        {loading ? <SyncOutlined spin /> : "Submit"}
                    </button>
                </form>
        </div>
        </>
    )
}

export default ForgotPassword;