# Lambda Comments

This project implements a minimal blog commenting service hosted on AWS. Originated by Jim Pick, the original project is here:

* [lambda-comments](https://github.com/jimpick/lambda-comments)

And Jim's original articles are here: 

* [Introducing lambda-comments](https://jimpick.com/2016/05/05/introducing-lambda-comments/) 
* [A day on the Hacker News home page: lambda-comments](https://jimpick.com/2016/05/10/after-hacker-news-lambda-comments/)

# The Fork
The goal of this fork is to make it easy as possible to setup, install and use the commenting system. In that process some other changes may [ or may not ] occur - for example possibly integrating the code with create-react-app

## Repository Installation and Setup


1. Clone the repository

`git clone https://github.com/talkingtab/lambda-comments.git` (https)  
or  
`git clone git@github.com: talkingtab/lambda-comments.git` (git)

`cd lambda-comments`

## Setup AWS

***Note:*** none of this is authoritative, but simply based on my experience with trying to get lambda-comments to work. Please feel free to submit bugs or pull requests if you have more authoritative information.

To a newcomer, AWS has a bewildering gaggle of component parts: lambda, ECS, cloudfront, cloudformation, and more are added every day including AWS Codestar. These offerings can be broken (in general )into two types: services and infrastructure. AWS lambda lets you spin up small, on demand services, while AWS IAM is the system for creating and empowering users. Both of these are complex.

### Infrastructure
AWS begins with an Amazon account which requires a credit card. If you plan to have other people use your AWS system it is recommended that you establish a separate account. 

Signing up for AWS establishes a one to one relationship between the Amazon account and AWS. The AWS IAM system allows creation of users that cannot access the controlling Amazon account.

[AWS IAM](https://aws.amazon.com/documentation/iam/)

IAM allows creation of users, adding users to groups (and to creating groups) and just as importantly the creation of policies.

Typically, once you establish an AWS account you would create an IAM account

1. Go to the AWS management console
2. Under "services" go to IAM
2. Select Users
3. Select Adduser
4. Create an admin: user name admin, programmatic acces, console access, custom password, no forced reset
5. Then "next permissions", create group. Groupname: admingroup, "AdministratorAccess", `Create Group`

This is the admin user (and group) you can use to create other, mission specific users. In particluar note the list of permissions that can be granted.

[ AWS Codestar ](http://docs.aws.amazon.com/codestar/latest/userguide/welcome.html?icmpid=docs_acs_console_mk)

Amazon seems to have recognized the complexity of matching policies to users and has just announced Codestar as a way to ease the pain. We will attempt to follow the Codestar method of developing services.


