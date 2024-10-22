"use client";

import { useFormStatus } from "react-dom";

export function LoginForm() {
    return (
        <form className="flex max-w-[300px] flex-col gap-2">
            <div className="flex flex-col gap-2">
                <input id="name" name="name" placeholder="Name" />
            </div>
            <div>
                <input id="email" name="email" placeholder="Email" />
            </div>
            <div>
                <input
                  id="password"
                  name="password" 
                  type="password"
                  placeholder="Password" 
                />
            </div>
            <SubmitButton />
        </form>
    );
}

function SubmitButton() {
    const { pending } = useFormStatus();
  
    return (
      <button disabled={pending} type="submit">
        Login
      </button>
    );
  }