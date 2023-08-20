<template>
  <div>
    <nav
      class="navbar bg-purple border-bottom border-body"
      data-bs-theme="dark"
    >
      <div class="container-fluid justify-evenly text-white">
        <router-link class="d-inline" to="/">
          <svg
            width="20"
            height="20"
            viewBox="0 0 1200 1200"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="#ffffff"
              d="M0 0v240h1200V0H0zm0 480v240h1200V480H0zm0 480v240h1200V960H0z"
            />
          </svg>
          <p class="d-inline ms-3">Cursos AlfaWeb</p>          
        </router-link>
        <div>
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <router-link class="p-2 px-4 rounded me-3" to="/">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 512 512"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill="#ffffff"
                    d="M261.56 101.28a8 8 0 0 0-11.06 0L66.4 277.15a8 8 0 0 0-2.47 5.79L63.9 448a32 32 0 0 0 32 32H192a16 16 0 0 0 16-16V328a8 8 0 0 1 8-8h80a8 8 0 0 1 8 8v136a16 16 0 0 0 16 16h96.06a32 32 0 0 0 32-32V282.94a8 8 0 0 0-2.47-5.79Z"
                  />
                  <path
                    fill="#ffffff"
                    d="m490.91 244.15l-74.8-71.56V64a16 16 0 0 0-16-16h-48a16 16 0 0 0-16 16v32l-57.92-55.38C272.77 35.14 264.71 32 256 32c-8.68 0-16.72 3.14-22.14 8.63l-212.7 203.5c-6.22 6-7 15.87-1.34 22.37A16 16 0 0 0 43 267.56L250.5 69.28a8 8 0 0 1 11.06 0l207.52 198.28a16 16 0 0 0 22.59-.44c6.14-6.36 5.63-16.86-.76-22.97Z"
                  />
                </svg>
              </router-link>
              <router-link class="p-2 px-4 rounded" to="/admin">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill="#ffffff"
                    d="m22.7 19l-9.1-9.1c.9-2.3.4-5-1.5-6.9c-2-2-5-2.4-7.4-1.3L9 6L6 9L1.6 4.7C.4 7.1.9 10.1 2.9 12.1c1.9 1.9 4.6 2.4 6.9 1.5l9.1 9.1c.4.4 1 .4 1.4 0l2.3-2.3c.5-.4.5-1.1.1-1.4Z"
                  />
                </svg>
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "NavBar",
};
</script>

<style scoped>
.bg-purple {
  background-color: #6a1b9a;
}
</style>
