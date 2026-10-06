# Super Secret International Film Festival (ssiff-film)

A microservices application for a fictional film festival, designed as the foundation
for an e-commerce platform. I designed and built it independently in 2021, after
graduating, to teach myself microservices, Kubernetes, and CI/CD.

> **Status (2026):** Archived. Kept as a record of my 2021 work. Not actively
> maintained; dependencies are out of date.

## Architecture

- **Services:** `auth` (user authentication), `films` (film catalog), `client`
  (Next.js frontend)
- **Shared library:** `common`, a shared TypeScript package used across services
- **Communication:** REST between the client and services
- **Data:** MongoDB, one database per service
- **Frontend:** Next.js with server-side rendering; Sass for styling
- **Testing:** Jest
- **Containers:** each service has its own Dockerfile; images published to Docker Hub
- **Orchestration:** Kubernetes, with ingress-nginx for routing. Manifests are split
  into `infra/k8s` (shared), `infra/k8s-dev`, and `infra/k8s-prod`
- **Local development:** Skaffold, with file sync for live reload
- **Hosting:** DigitalOcean Kubernetes

## CI/CD (GitHub Actions)

- **Tests:** workflows run the Jest test suites for `auth` and `films`
- **Deploys:** on push to `master`, each service's workflow runs only when that
  service's folder changes. It builds the Docker image, pushes it to Docker Hub,
  connects to the DigitalOcean cluster with `doctl`, and restarts the deployment
- **Manifests:** changes under `infra/` are applied to the cluster automatically

## What I'd change today

- Tag images with the commit SHA and deploy that exact tag, instead of relying on
  `latest` and `kubectl rollout restart`
- Use `docker login --password-stdin` instead of passing the password as a flag
- Update deprecated GitHub Actions (for example, `actions/checkout@v2`)
- Define the Kubernetes cluster with Terraform instead of creating it manually
- Replace NATS Streaming (deprecated) with NATS JetStream if adding event-driven
  services

## History

- `ssiff` (private): first attempt, started February 2021
- `ssiff-film` (this repo): second attempt, started April 2021
