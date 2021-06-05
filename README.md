# Super Secret International Film Festival

## Local deployment

In order to deploy the application and the microservices your system should have installed the following technologies:

- [Docker](https://www.docker.com/)
- [Kubernetes](https://kubernetes.io/)
- [Skaffold](https://skaffold.dev/)

1. Run the command below to create jwt secret (replace "jwt_secret" with a secret of your choice):

```bash
$ kubectl create secret generic jwt-secret --from-literal=JWT_KEY=jwt_secret
```

2. Run the command below to install ingress-nginx:

```bash
$ apply -f https://raw.githubusercontent.com/kubernetes/ingress-nginx/controller-v0.45.0/deploy/static/provider/cloud/deploy.yaml
```

3. Add a temporary line "127.0.0.1 ssiff-film.dev" to /etc/hosts file:

```bash
$ code /etc/hosts
```

4. Run Skaffold to create Kubernetes Objects (in order to stop Skaffold, press ctrl + c):

```bash
$ skaffold dev
```

5. Navigate to https://ssiff-film.dev using a Chrome browser, click on the page background and type: thisisunsafe
