# Usa la imagen ligera de nginx
FROM nginx:alpine


# Copiamos nuestra página estática al directorio de nginx
COPY site/ /usr/share/nginx/html


# Exponemos el puerto 3000
EXPOSE 3000


# Arrancamos nginx en primer plano
CMD ["nginx", "-g", "daemon off;"]
