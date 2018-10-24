import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <div>
        <div class="MuiToolbar-root-47 MuiToolbar-regular-49 MuiToolbar-gutters-48">
          <button
            class="MuiButtonBase-root-57 MuiIconButton-root-51 MuiIconButton-colorInherit-52 PrimarySearchAppBar-menuButton-3"
            tabindex="0"
            type="button"
            aria-label="Open drawer"
          >
            <span class="MuiIconButton-label-56">
              <svg
                class="MuiSvgIcon-root-60"
                focusable="false"
                viewBox="0 0 24 24"
                aria-hidden="true"
                role="presentation"
              >
                <path fill="none" d="M0 0h24v24H0z" />
                <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
              </svg>
            </span>
            <span class="MuiTouchRipple-root-130" />
          </button>
          <h6 class="MuiTypography-root-69 MuiTypography-h6-86 MuiTypography-colorInherit-98 MuiTypography-noWrap-95 PrimarySearchAppBar-title-4">
            Playgroundz
          </h6>
          <div class="PrimarySearchAppBar-search-5">
            <div class="PrimarySearchAppBar-searchIcon-6">
              <svg
                class="MuiSvgIcon-root-60"
                focusable="false"
                viewBox="0 0 24 24"
                aria-hidden="true"
                role="presentation"
              >
                <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
                <path fill="none" d="M0 0h24v24H0z" />
              </svg>
            </div>
            <div class="MuiInputBase-root-104 PrimarySearchAppBar-inputRoot-7">
              <input
                class="MuiInputBase-input-114 PrimarySearchAppBar-inputInput-8"
                placeholder="Search…"
                type="text"
                value=""
              />
            </div>
          </div>
          <div class="PrimarySearchAppBar-grow-2" />
          <div class="PrimarySearchAppBar-sectionDesktop-9">
            <button
              class="MuiButtonBase-root-57 MuiIconButton-root-51 MuiIconButton-colorInherit-52"
              tabindex="0"
              type="button"
            >
              <span class="MuiIconButton-label-56">
                <span class="MuiBadge-root-121">
                  <svg
                    class="MuiSvgIcon-root-60"
                    focusable="false"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                    role="presentation"
                  >
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                    <path fill="none" d="M0 0h24v24H0z" />
                  </svg>
                  <span class="MuiBadge-badge-122 MuiBadge-colorSecondary-124" />
                </span>
              </span>
              <span class="MuiTouchRipple-root-130" />
            </button>
            <button
              class="MuiButtonBase-root-57 MuiIconButton-root-51 MuiIconButton-colorInherit-52"
              tabindex="0"
              type="button"
            >
              <span class="MuiIconButton-label-56">
                <span class="MuiBadge-root-121">
                  <svg
                    class="MuiSvgIcon-root-60"
                    focusable="false"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                    role="presentation"
                  >
                    <path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.89 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z" />
                  </svg>
                  <span class="MuiBadge-badge-122 MuiBadge-colorSecondary-124">
                    1
                  </span>
                </span>
              </span>
              <span class="MuiTouchRipple-root-130" />
            </button>
            <button
              class="MuiButtonBase-root-57 MuiIconButton-root-51 MuiIconButton-colorInherit-52"
              tabindex="0"
              type="button"
              aria-haspopup="true"
            >
              <span class="MuiIconButton-label-56">
                <svg
                  class="MuiSvgIcon-root-60"
                  focusable="false"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                  role="presentation"
                >
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z" />
                  <path fill="none" d="M0 0h24v24H0z" />
                </svg>
              </span>
              <span class="MuiTouchRipple-root-130" />
            </button>
          </div>
          <div class="PrimarySearchAppBar-sectionMobile-10">
            <button
              class="MuiButtonBase-root-57 MuiIconButton-root-51 MuiIconButton-colorInherit-52"
              tabindex="0"
              type="button"
              aria-haspopup="true"
            >
              <span class="MuiIconButton-label-56">
                <svg
                  class="MuiSvgIcon-root-60"
                  focusable="false"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                  role="presentation"
                >
                  <path fill="none" d="M0 0h24v24H0z" />
                  <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" />
                </svg>
              </span>
              <span class="MuiTouchRipple-root-130" />
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
