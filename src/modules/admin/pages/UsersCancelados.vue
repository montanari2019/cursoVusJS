<template>
  <div>
    <NavBarAdmin></NavBarAdmin>

    <main class="container ">
      <section>
        <div class="mt-5 mb-5">
          <h1 class="mt-3 fw-normal texto-center">Contratos cancelados</h1>
        </div>

        

        <div>
          <h2 class="m-3 fw-light text-ajust ">
            Todos os associados cancelados: {{ users.length }}
          </h2>
        </div>

        <div class="container-main card p-3  ">
          <div
            class="card m-3 card-user"
            style="width: 30rem;"
            v-for="(user, id) in users"
            v-bind:key="id"
          >
            <div class="card-body">
              <h5 class="card-title">
                {{ user.user.nome }}
              </h5>
              <h6 class="card-subtitle mb-2 text-muted">
                {{ user.user.email }}
              </h6>
              <p class="card-text">
                {{ user.user.c_p_f }}
              </p>
              <button type="button" class="btn btn-danger">
                <router-link
                  :to="`/listUser/${user.user.id}`"
                  class="router-link"
                  >Ver detalhes</router-link
                >
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>

    <Footer></Footer>
  </div>
</template>

<script>
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import { mapState } from "vuex";
import Footer from "../../../components/Footer.vue";
import NavBarAdmin from "./NavBarAdmin.vue";

export default {
  name: "UsersCancelados",
  components: {
    // eslint-disable-next-line vue/no-unused-components
    Footer,
    NavBarAdmin,
  },

  data() {
    return {
      users: [],
    };
  },

  computed: {
    ...mapState("auth", ["user"]),
    ...mapState("auth", ["token"]),
  },
  methods: {
    async getUsers() {
      const options = {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${this.token}`,
        },
      };

      // console.log(options)
      return await fetch(
        `https://api-academic-control-v2.herokuapp.com/contratos/cancelados`,
        options
      )
        .then((res) => res.json())
        .then((res) => {
          this.users = res;
          // console.log(this.users);
        })
        .catch((erro) => console.log(erro));
    },
  },

  created() {
    this.getUsers();
  },
};
</script>

<style>
.background-menu {
  background: #262e51;
  padding-top: 3%;
  padding-bottom: 3%;
}
.card-user:hover {
  box-shadow: 0px 5px 5px rgba(255, 0, 0, 0.25);
  transition: 0.4s;
}
.router-link {
  text-decoration: none;
  color: floralwhite;
}
.router-link:hover {
  color: black;
}
.button-menu {
  cursor: pointer;
}
.container-main {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
}

.text-ajust {
  text-align: center;
}

.centralizer {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.image-card {
  max-width: 400px;
  max-height: 200px;
}

.container-list-User {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.imagen-user {
  margin: 10px;
  margin-top: 2%;
  /* position: relative; */
  width: 200px;
  height: 200px;
  overflow: hidden;
  border-radius: 50%;
}
.texto-center {
    text-align: center;
  }
/* Responsivade*/
@media (min-width: 999px) {
  .texto-center {
    text-align: left;
  }
  .background-menu {
    padding-top: 1%;
    padding-bottom: 1%;
  }
}
</style>
