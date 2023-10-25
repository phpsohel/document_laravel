const {createApp} = Vue;
        createApp({
            data(){
                return {
                    link: "npm init vue@latest",
                    node: "npm install",
                    server:"npm run dev"
                };
       }
 }).mount('#app');
