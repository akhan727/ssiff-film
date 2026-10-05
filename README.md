# Super Secret International Film Festival (ssiff-film)

A microservice-based e-commerce platform for a fictional film festival. I designed
and built it independently in 2021, after graduating, to teach myself microservices,
Kubernetes, and event-driven architecture.

> **Status (2026):** Archived. Kept as a record of my 2021 work. Not actively
> maintained; dependencies are out of date.

## Architecture

- **Communication:** REST between the client and services; asynchronous events
  between services through **NATS Streaming**
- **Data:** **MongoDB**, one database per service
- **Frontend:** **Next.js** with server-side rendering; **Sass** for styling
- **Testing:** **Jest**
- **Containers and orchestration:** each service containerized with **Docker** and
  deployed to **Kubernetes**, with **ingress-nginx** for routing; **Skaffold** for
  local development
- **Hosting:** **DigitalOcean** **Google Cloud**

## What I'd change today

- **NATS Streaming** has been deprecated in favor of **NATS JetStream**; I'd migrate
  to JetStream.
- Define the cluster and cloud resources with **Terraform** instead of setting
  them up by hand.
- Add a **GitHub Actions** pipeline for tests and image builds.
- Move container images to a currently supported registry.

## History

- `ssiff` (private): first attempt, started February 2021
- `ssiff-film` (this repo): second attempt, started April 2021
