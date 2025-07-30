# Etapa 1: build da aplicação
FROM node:20 as builder
WORKDIR /app
COPY . .
RUN npm install && npm run build

# Etapa 2: servidor para servir os arquivos
FROM nginx:alpine
COPY --from=builder /app/dist /usr/share/nginx/html

# Expor a porta 3113
EXPOSE 3113

# Substituir a configuração padrão do Nginx
COPY nginx.conf /etc/nginx/conf.d/default.conf
