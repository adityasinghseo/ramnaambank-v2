import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: "0.0.0.0",
    port: 3000,
    proxy: {
      '/api-wc': {
        target: 'https://admin.shriramnaambank.com/wp-json/wc/v3',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api-wc/, ''),
        secure: false,
      },
      '/api-wp': {
        target: 'https://admin.shriramnaambank.com/wp-json/wp/v2',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api-wp/, ''),
        secure: false,
      }
    },
  },
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});

