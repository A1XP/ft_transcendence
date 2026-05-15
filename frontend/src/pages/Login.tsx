import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import axios from "axios";
import { useState } from "react";

const loginSchema = z.object({
  email: z.string().email("Invalid email"),
  password: z.string().min(6, "Password too short"),
});

type LoginForm = z.infer<typeof loginSchema>;

export default function Login() {
  const [success, setSuccess] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginForm>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data: LoginForm) => {
    setSuccess(null);
    setError(null);

    try {
      const res = await axios.post(
        "http://localhost:4000/auth/login",
        data
      );

      setSuccess(`Welcome ${res.data.email}! Login successful`);

      // JWT would be stored here for authenticated requests:
      // localStorage.setItem("token", res.data.access_token);

    } catch (err: any) {
      setError(
        err.response?.data?.message || "Login failed"
      );
    }
  };

  return (
    <div style={{ maxWidth: 400, margin: "100px auto" }}>
      <h2>Login</h2>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <input placeholder="Email" {...register("email")} />
          {errors.email && (
            <p style={{ color: "red" }}>
              {errors.email.message}
            </p>
          )}
        </div>

        <div>
          <input
            type="password"
            placeholder="Password"
            {...register("password")}
          />
          {errors.password && (
            <p style={{ color: "red" }}>
              {errors.password.message}
            </p>
          )}
        </div>

        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Loading..." : "Login"}
        </button>
      </form>

      {success && (
        <p style={{ color: "green", marginTop: 10 }}>
          {success}
        </p>
      )}

      {error && (
        <p style={{ color: "red", marginTop: 10 }}>
          {error}
        </p>
      )}
    </div>
  );
}