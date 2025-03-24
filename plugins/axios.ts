import axios from "axios";

export default defineNuxtPlugin(async () => {
  const config = useRuntimeConfig();
  axios.defaults.baseURL = config.public.baseURL;
  
  // axios.defaults.baseURL = "https://mydomain.com";
  axios.defaults.timeout = 30000;

  const router = useRouter();

  // const accessToken = useCookie('access_token')
  // axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken.value}`;

  // axios.defaults.headers.common['Authorization'] = ``;

  axios.interceptors.response.use(
    function (response) {
      // this below line should be commented
      // console.log(axios.defaults.headers.common);
      return response;
    },
    // function (error) {
    //   if (error.response.status === 401) {
    //     router.push("/");
    //   } else {
    //     return Promise.reject(error);
    //   }
    // }
  );
  return {
    provide: {
      axios: axios,
    },
  };
});
