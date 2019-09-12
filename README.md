# Lab Extension Template

This is a template for beginning a JupyterLab Extension. It sets up the build script and contains
scaffolding for getting started. In addition, you will need to follow the instructions below to
set up your development and install the extension.

This template was created for and tested with JupyterLab 1.1.3.

## Setting up your environment

I recommend first creating a conda environment to work in.

> conda create -n lab
> source activate lab

Inside the environment, install JupyterLab and the tools that are required for its build pipeline.

> conda install -c conda-forge jupyterlab nodejs
> npm install --global webpack
> npm install --global webpack-cli
> npm install --global lerna
> npm install --global typescript

Next, make sure that you can run JupyterLab in dev mode.

> jupyter lab --dev-mode

If you receive an error that lab cannot import `dev_mode`, you may need to softlink the `dev_mode`
directory inside the `jupyterlab` package directly to your Python path.

Finally, before your code can import and work with common JupyterLab packages, you will need to
install the source for those packages. This can be done using the `jlpm` command, which is a
JupyterLab-specific wrapper around the `yarn` dependency manager.

Which packages you need to install will vary with what you are doing, but some common JupyterLab
packages are below. Phosphor is the widget library developed for JupyterLab.

> jlpm add @jupyterlab/apputils
> jlpm add @jupyterlab/application
> jlpm add @phosphor/widgets
> jlpm add @phosphor/messaging

## Building the extension

Before you can develop and test your extension, you must install it into JupyterLab. Run the
commands below while in the `jupyterlab-extension-template` directory.

> jlpm install
> jupyter labextension install . --no-build

While developing your extension, run the command below. It will watch your development files,
rebuilding the extension and deploying to JupyterLab when it detects a change. This will take a
few seconds.

> jupyter lab --watch