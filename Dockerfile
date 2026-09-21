# Standards Dokploy : Node 22 + sirv-cli (modèle dsml/sites)
FROM node:22-alpine

WORKDIR /app

# Copie des manifestes de paquets
COPY package*.json ./

# Installation globale de sirv-cli et dépendances
RUN npm install -g sirv-cli && npm install

# Copie des sources du projet
COPY . .

# Build statique du design system
RUN npm run build

# Port Dokploy standardisé
EXPOSE 3000

# Lancement du serveur statique rapide et léger
CMD ["sirv", "dist", "--port", "3000", "--host", "0.0.0.0", "--cors"]
