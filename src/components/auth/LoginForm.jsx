import { Link } from "react-router-dom";
import { Login } from "../../actions/auth/login";
import ReactLoading from "react-loading";
import { useState } from "react";
export default function LoginForm({ SetIsModalOpen, email, setEmail }) {
  const [isSubmitting, setisSubmitting] = useState(false);
  const [error, setError] = useState("");
  async function handleSubmit(e) {
    e.preventDefault();
    setError("");
    setisSubmitting(true);
    let resp = await Login(email);
    if (resp?.error) {
      setisSubmitting(false);
      setError(resp.error);
    } else {
      setisSubmitting(false);
      SetIsModalOpen(true);
    }
  }
  return (
    <>
      <form onSubmit={handleSubmit} className="flex gap-5 w-full flex-col">
        <label className="text-gray-800 text-xl font-semibold" htmlFor="email">
          Email
        </label>
        <input
          className="shadow-lg w-[75%] h-[45px] rounded-lg p-2 outline-none"
          type="email"
          name="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          disabled={isSubmitting}
        />
        {error && <p className="text-red-500 text-lg">{error}</p>}
        <button
          disabled={isSubmitting}
          className="w-[75%] h-[45px] flex items-center justify-center text-slate-100 text-lg rounded-full bg-green-500"
          type="submit"
        >
          {isSubmitting ? (
            <ReactLoading
              type={"spin"}
              color={"white"}
              height={30}
              width={30}
            />
          ) : (
            "Login"
          )}
        </button>
        <div className="w-full flex pl-1">
          <p className="text-lg gap-1 flex">
            Dont have an account?
            <Link className="text-green-500" to={"/signup"}>
              Create Account
            </Link>
          </p>
        </div>
      </form>
    </>
  );
}
