# Digi Blog

The home of the DigiBanks99 blog hosting platform.

![API](https://github.com/DigiBanks99/digi-blog/actions/workflows/api.yml/badge.svg)
![SPA](https://github.com/DigiBanks99/digi-blog/actions/workflows/spa.yml/badge.svg)

## Getting started

The DigiBlog platform is hosted on Azure Functions for the API and the frontend is hosted on Azure Static Web Apps. You need a few [prerequisites](#prerequisites) to get started, but from there [running](#running-the-application-locally) the application locally is easy.

### Prerequisites

Running the solution locally requires a few tools to be installed, primarily the **Azure Functions Core Tools** and Azure Static Web Apps CLI. The full list of prerequisites are:

- [.NET 6.1](https://dotnet.microsoft.com/en-us/download)
- [Azure Functions Core Tools](https://docs.microsoft.com/en-us/azure/azure-functions/functions-run-local?tabs=v4)
- [Azure Static Web Apps CLI](https://azure.github.io/static-web-apps-cli/)
- [Node JS](https://nodejs.org/en/)

### Running the application locally

From VSCode, running the application locally is quite easy, as you just have to start the default debugging profile by pressing `F5`. Alternatively, from your preferred terminal, you can run the following command to start the application:

```sh
cd src/spa
swa start http://localhost:4200 --run "npm start" --api-location ../api
```
