# notes

## Configure AWS CLI

```bash
aws configure list
aws configure
```

## Configure for "checkly" apiKey and accountId

``` bash
pulumi config set checkly:apiKey cu_xxxx --secret
pulumi config set checkly:accountId xxxx
```

## Create all resources

``` bash
pulumi up
```

## Destroy all resources and project

``` bash
pulumi destroy
pulumi stack rm dev
```
