import React, { Component } from "react";

class Login extends Component {
  render() {
    return (
      <div>
        <main class="SignIn-layout-130">
          <div class="MuiPaper-root-20 MuiPaper-elevation2-24 MuiPaper-rounded-21 SignIn-paper-131">
            <div class="MuiAvatar-root-135 MuiAvatar-colorDefault-136 SignIn-avatar-132">
              <svg
                class="MuiSvgIcon-root-60"
                focusable="false"
                viewBox="0 0 24 24"
                aria-hidden="true"
                role="presentation"
              >
                <g fill="none">
                  <path d="M0 0h24v24H0V0z" />
                  <path d="M0 0h24v24H0V0z" opacity=".87" />
                </g>
                <path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zM9 6c0-1.66 1.34-3 3-3s3 1.34 3 3v2H9V6zm9 14H6V10h12v10zm-6-3c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z" />
              </svg>
            </div>
            <h1 class="MuiTypography-root-69 MuiTypography-h5-85">Sign in</h1>
            <form class="SignIn-form-133">
              <div class="MuiFormControl-root-138 MuiFormControl-marginNormal-139 MuiFormControl-fullWidth-141">
                <div class="MuiInputBase-root-104 MuiInput-root-156 MuiInput-underline-160 MuiInputBase-formControl-105 MuiInput-formControl-157">
                  <input
                    aria-invalid="false"
                    autocomplete="email"
                    class="MuiInputBase-input-114 MuiInput-input-164"
                    id="email"
                    name="email"
                    placeholder="Email Address"
                    required=""
                    type="text"
                  />
                </div>
              </div>
              <div class="MuiFormControl-root-138 MuiFormControl-marginNormal-139 MuiFormControl-fullWidth-141">
               {/* Password */}
                <div class="MuiInputBase-root-104 MuiInput-root-156 MuiInput-underline-160 MuiInputBase-formControl-105 MuiInput-formControl-157">
                  <input
                    aria-invalid="false"
                    autocomplete="current-password"
                    class="MuiInputBase-input-114 MuiInput-input-164 MuiInputBase-inputType-117 MuiInput-inputType-167"
                    id="password"
                    name="password"
                    placeholder="Password"
                    required=""
                    type="password"
                    
                    />
                </div>
              </div>
              {/* Submit Button Big Blue */}
              <button
                class="MuiButtonBase-root-57 MuiButton-root-183 MuiButton-contained-194 MuiButton-containedPrimary-195 MuiButton-raised-197 MuiButton-raisedPrimary-198 MuiButton-fullWidth-208 SignIn-submit-134"
                tabindex="0"
                type="submit"
              >
                <span class="MuiButton-label-184">Sign in</span>
                <span class="MuiTouchRipple-root-209" />
              </button>
            </form>
          </div>
        </main>
      </div>
    );
  }
}

export default Login;
