const _questions = [
  {
    text: `It is a fully managed, secure enterprise storage and sharing service.
    \nUsers can comment on files, send them to others for feedback, and upload new versions without having to resort to emailing multiple versions of their files as attachments.
    \nIt was first announced by the name Amazon Zocalo.`,
    answer: 'Amazon WorkDocs',
    audio: 'https://s3-ap-southeast-1.amazonaws.com/karuta.awsvn.org/audio/AmazonWorkDocs.mp3',
    image: 'https://s3-ap-southeast-1.amazonaws.com/karuta.awsvn.org/img/AmazonWorkDocs.png'
  },
  {
    text: `It is a secure, managed business email and calendar service.
    \nIt gives users the ability to seamlessly access their email, contacts, and calendars using Microsoft Outlook, their web browser, or their native iOS and Android email applications.
    \nYou can integrate it with your existing corporate directory and control both the keys that encrypt your data and the location in which your data is stored.`,
    answer: 'Amazon WorkMail',
    audio: 'https://s3-ap-southeast-1.amazonaws.com/karuta.awsvn.org/audio/AmazonWorkMail.mp3',
    image: 'https://s3-ap-southeast-1.amazonaws.com/karuta.awsvn.org/img/AmazonWorkMail.png'
  },
  {
    text: `It is a fully managed, secure desktop computing service which runs on the AWS cloud.
      \nIt allows you to easily provision cloud-based virtual desktops and provide your users access to the documents, applications, and resources they need from any supported device, including Windows and Mac computers, Chromebooks, iPads, Fire tablets, and Android tablets.
      \nThe user disk area is backed up in S3 periodically.`,
    answer: 'Amazon WorkSpaces',
    audio: 'https://s3-ap-southeast-1.amazonaws.com/karuta.awsvn.org/audio/AmazonWorkSpaces.mp3',
    image: 'https://s3-ap-southeast-1.amazonaws.com/karuta.awsvn.org/img/AmazonWorkSpaces.png'
  },
  {
    text: `It is a web service that makes it easy to quickly and cost-effectively process vast amounts of data.
    \nIt simplifies big data processing, providing a managed Hadoop framework that makes it easy, fast, and cost-effective for you to distribute and process vast amounts of your data across dynamically scalable Amazon EC2 instances.`,
    answer: 'Amazon Elastic MapReduce (EMR)',
    audio: 'https://s3-ap-southeast-1.amazonaws.com/karuta.awsvn.org/audio/Analytics_AmazonEMR.mp3',
    image: 'https://s3-ap-southeast-1.amazonaws.com/karuta.awsvn.org/img/AmazonEMR.png'
  },
  {
    text: `It is a managed service that makes it easy to deploy, operate, and scale Elasticsearch in the AWS Cloud.`,
    answer: 'Amazon Elasticsearch Service',
    audio: 'https://s3-ap-southeast-1.amazonaws.com/karuta.awsvn.org/audio/Analytics_AmazonElasticsearch.mp3',
    image: 'https://s3-ap-southeast-1.amazonaws.com/karuta.awsvn.org/img/AmazonElasticsearch.png'
  },
  {
    text: `It is a service that makes it easy for developers of all skill levels to use machine learning technology.`,
    answer: 'Amazon Machine Learning',
    audio: 'https://s3-ap-southeast-1.amazonaws.com/karuta.awsvn.org/audio/Analytics_AmazonMachineLearning.mp3',
    image: 'https://s3-ap-southeast-1.amazonaws.com/karuta.awsvn.org/img/AmazonMachineLearning.png'
  },
  {
    text: `It is a very fast, business intelligence (BI) service that makes it easy to build visualizations, perform ad-hoc analysis, and quickly get business insights from their data.
    \nIt uses a new, Super-fast, Parallel, In-memory Calculation Engine (“SPICE”) to perform advanced calculations and render visualizations rapidly.`,
    answer: 'Amazon QuickSight',
    audio: 'https://s3-ap-southeast-1.amazonaws.com/karuta.awsvn.org/audio/Analytics_AmazonQuickSight.mp3',
    image: 'https://s3-ap-southeast-1.amazonaws.com/karuta.awsvn.org/img/AmazonQuickSight.png'
  },
  {
    text: `It is a web service that helps you reliably process and move data between different AWS compute and storage services, as well as on-premise data sources, at specified intervals.
    \nYou can regularly access your data where it’s stored, transform and process it at scale, and efficiently transfer the results to AWS services.`,
    answer: 'AWS Data Pipeline',
    audio: 'https://s3-ap-southeast-1.amazonaws.com/karuta.awsvn.org/audio/Analytics_DataPipeline.mp3',
    image: 'https://s3-ap-southeast-1.amazonaws.com/karuta.awsvn.org/img/DataPipeline.png'
  },
  {
    text: `It is a platform for streaming data on AWS, offering powerful services to make it easy to load and analyze streaming data, and also providing the ability for you to build custom streaming data applications for specialized needs.`,
    answer: 'Amazon Kinesis',
    audio: 'https://s3-ap-southeast-1.amazonaws.com/karuta.awsvn.org/audio/Analytics_Kinesis.mp3',
    image: 'https://s3-ap-southeast-1.amazonaws.com/karuta.awsvn.org/img/Kinesis.png'
  },
  {
    text: `It is a fully managed service that makes it easy to create, publish, maintain, monitor, and secure APIs at any scale. 
    \nWith a few clicks in the AWS Management Console, you can create an API that acts as a “front door” for applications to access data, business logic, or functionality from your back-end services, 
    such as workloads running on Amazon Elastic Compute Cloud (Amazon EC2), code running on AWS Lambda, or any Web application.`,
    answer: 'Amazon API Gateway',
    audio: 'https://s3-ap-southeast-1.amazonaws.com/karuta.awsvn.org/audio/ApplicationServices_APIGateway.mp3',
    image: 'https://s3-ap-southeast-1.amazonaws.com/karuta.awsvn.org/img/APIGateway.png'
  },
  {
    text: `It is a managed service in the AWS Cloud that makes it simple and cost-effective to set up, manage, and scale a search solution for your website or application.`,
    answer: 'Amazon CloudSearch',
    audio: 'https://s3-ap-southeast-1.amazonaws.com/karuta.awsvn.org/audio/ApplicationServices_AmazonCloudSearch.mp3',
    image: 'https://s3-ap-southeast-1.amazonaws.com/karuta.awsvn.org/img/AmazonCloudSearch.png'
  },
  {
    text: `It is media transcoding in the cloud that is highly scalable, easy to use, and a cost effective way  to convert (or “transcode”) media files from their source format into versions that will playback on devices like smartphones, tablets and PCs.
    \nYou can also create an audio-only alternate stream.`,
    answer: 'Amazon Elastic Transcoder',
    audio: 'https://s3-ap-southeast-1.amazonaws.com/karuta.awsvn.org/audio/ApplicationServices_AmazonElasticTranscoder.mp3',
    image: 'https://s3-ap-southeast-1.amazonaws.com/karuta.awsvn.org/img/AmazonElasticTranscoder.png'
  },
  {
    text: `It is a cost-effective email service built on the reliable and scalable infrastructure that Amazon.com developed to serve its own customer base.`,
    answer: 'Amazon Simple Email Service (Amazon SES)',
    audio: 'https://s3-ap-southeast-1.amazonaws.com/karuta.awsvn.org/audio/ApplicationServices_AmazonSES.mp3',
    image: 'https://s3-ap-southeast-1.amazonaws.com/karuta.awsvn.org/img/AmazonSES.png'
  },
  {
    text: `It is a fast, reliable, scalable, fully managed message queuing service.`,
    answer: 'Amazon SQS(Simple Queue Service)',
    audio: 'https://s3-ap-southeast-1.amazonaws.com/karuta.awsvn.org/audio/ApplicationServices_AmazonSQS.mp3',
    image: 'https://s3-ap-southeast-1.amazonaws.com/karuta.awsvn.org/img/AmazonSQS.png'
  },
  {
    text: `It is a fully managed workflow service for building scalable, resilient applications.
    \nIt acts as the coordination hub for all of the different components of your application.`,
    answer: 'Amazon SWF(Simple Workflow Service)',
    audio: 'https://s3-ap-southeast-1.amazonaws.com/karuta.awsvn.org/audio/ApplicationServices_AmazonSWF.mp3',
    image: 'https://s3-ap-southeast-1.amazonaws.com/karuta.awsvn.org/img/AmazonSWF.png'
  },
  {
    text: `This enables you to stream your applications with high-resolution graphics from the cloud.`,
    answer: 'Amazon AppStream',
    audio: 'https://s3-ap-southeast-1.amazonaws.com/karuta.awsvn.org/audio/ApplicationServices_AppStream.mp3',
    image: 'https://s3-ap-southeast-1.amazonaws.com/karuta.awsvn.org/img/AppStream.png'
  },
  {
    text: `It encourages scalable deployment of applications by providing a web service through which a user can boot an Amazon Machine Image to configure a virtual machine.`,
    answer: 'Amazon EC2(Elastic Compute Cloud)',
    audio: 'https://s3-ap-southeast-1.amazonaws.com/karuta.awsvn.org/audio/Compute_AmazonEC2.mp3',
    image: 'https://s3-ap-southeast-1.amazonaws.com/karuta.awsvn.org/img/AmazonEC2.png'
  },
  {
    text: `A fully-managed Docker container registry that makes it easy for developers to store, manage, and deploy Docker container images.
    \nIt can be integrated into Amazon EC2 Container Service (ECS)`,
    answer: 'Amazon EC2 Container Registry (ECR)',
    audio: 'https://s3-ap-southeast-1.amazonaws.com/karuta.awsvn.org/audio/Compute_AmazonEC2ContainerRegistry.mp3',
    image: 'https://s3-ap-southeast-1.amazonaws.com/karuta.awsvn.org/img/AmazonEC2ContainerRegistry.png'
  },
  {
    text: `A Docker container supported management service.
    \nYou can easily manage clusters of Amazon Elastic Compute Cloud (Amazon EC2).`,
    answer: 'Amazon EC2 Container Service (ECS)',
    audio: 'https://s3-ap-southeast-1.amazonaws.com/karuta.awsvn.org/audio/Compute_AmazonEC2ContainerService.mp3',
    image: 'https://s3-ap-southeast-1.amazonaws.com/karuta.awsvn.org/img/AmazonEC2ContainerService.png'
  },
  {
    text: `It has OS and software installed and has the ability to save a disk image of a virtual machine.`,
    answer: 'AmazonMachine Image(AMI)',
    audio: 'https://s3-ap-southeast-1.amazonaws.com/karuta.awsvn.org/audio/Compute_AmazonEC2_AMI.mp3',
    image: 'https://s3-ap-southeast-1.amazonaws.com/karuta.awsvn.org/img/AMI.png'
  },
  {
    text: `Using git and IDE in the AWS cloud,  it's an easy and quick application deployment service.`,
    answer: 'AWS Elastic Beanstalk',
    audio: 'https://s3-ap-southeast-1.amazonaws.com/karuta.awsvn.org/audio/Compute_ElasticBeanstalk.mp3',
    image: 'https://s3-ap-southeast-1.amazonaws.com/karuta.awsvn.org/img/ElasticBeanstalk.png'
  },
  {
    text: `It automatically distributes incoming application traffic across multiple Amazon EC2 instances.`,
    answer: 'Amazon Elastic Load Balancer (ELB)',
    audio: 'https://s3-ap-southeast-1.amazonaws.com/karuta.awsvn.org/audio/Compute_ElasticLoadBalancing.mp3',
    image: 'https://s3-ap-southeast-1.amazonaws.com/karuta.awsvn.org/img/ElasticLoadBalancing.png'
  },
  {
    text: `It is a compute service where you can upload your code and this service can run the code on your behalf using AWS infrastructure.
    \nYou can easily build data processing triggers for AWS services like Amazon S3 and Amazon DynamoDB.`,
    answer: 'AWS Lambda',
    audio: 'https://s3-ap-southeast-1.amazonaws.com/karuta.awsvn.org/audio/Compute_Lambda.mp3',
    image: 'https://s3-ap-southeast-1.amazonaws.com/karuta.awsvn.org/img/Lambda.png'
  },
  {
    text: `This service supports homogeneous migrations such as Oracle to Oracle, and also heterogeneous migrations between different database platforms, such as Oracle to MySQL or MySQL to Amazon Aurora.`,
    answer: 'AWS Database Migration Service',
    audio: 'https://s3-ap-southeast-1.amazonaws.com/karuta.awsvn.org/audio/Database_AWSDatabaseMigrationService.mp3',
    image: 'https://s3-ap-southeast-1.amazonaws.com/karuta.awsvn.org/img/AWSDatabaseMigrationService.png'
  },
  {
    text: `This service improves the performance of web applications by retrieving information from managed in-memory caches such as memcached or Redis.`,
    answer: 'Amazon ElastiCache',
    audio: 'https://s3-ap-southeast-1.amazonaws.com/karuta.awsvn.org/audio/Database_AmazonElasticCache.mp3',
    image: 'https://s3-ap-southeast-1.amazonaws.com/karuta.awsvn.org/img/AmazonElasticCache.png'
  },
  {
    text: `A full managed RDBMS service.
    \nComplex administration processes like patching the database software, backing up databases and enabling point-in-time recovery are managed automatically.
    \nIt uses MySQL, Oracle Database, SQLServer and PostgreSQL.`,
    answer: 'Amazon Relational Database Service (RDS)',
    audio: 'https://s3-ap-southeast-1.amazonaws.com/karuta.awsvn.org/audio/Database_AmazonRDS.mp3',
    image: 'https://s3-ap-southeast-1.amazonaws.com/karuta.awsvn.org/img/AmazonRDS.png'
  },
  {
    text: `It's a full-managed, petabyte-scale data warehouse service.
    \nAfter you provision your cluster, you can upload your data set and then perform data analysis queries on this.`,
    answer: 'Amazon Redshift',
    audio: 'https://s3-ap-southeast-1.amazonaws.com/karuta.awsvn.org/audio/Database_AmazonRedShift.mp3',
    image: 'https://s3-ap-southeast-1.amazonaws.com/karuta.awsvn.org/img/AmazonRedshift.png'
  },
  {
    text: `Incremental backups on EBS that, when saved to Amazon S3, only the blocks on the device change.`,
    answer: 'Amazon EBS Snapshots',
    audio: 'https://s3-ap-southeast-1.amazonaws.com/karuta.awsvn.org/audio/StorageContentDelivery_snapshot.mp3',
    image: 'https://s3-ap-southeast-1.amazonaws.com/karuta.awsvn.org/img/snapshot.png'
  },
  {
    text: `fully managed NoSQL database service. The seamless reading and writing performance  can be designated as a "unit", and it's possible to change it anytime as the need arises.`,
    answer: 'Amazon DynamoDB',
    audio: 'https://s3-ap-southeast-1.amazonaws.com/karuta.awsvn.org/audio/Database_DynamoDB.mp3',
    image: 'https://s3-ap-southeast-1.amazonaws.com/karuta.awsvn.org/img/DynamoDB.png'
  },
  {
    text: `A secure, highly scalable, managed source control service that hosts private Git repositories.`,
    answer: 'AWS CodeCommit',
    audio: 'https://s3-ap-southeast-1.amazonaws.com/karuta.awsvn.org/audio/DeploymentManagement_AWSCodeCommit.mp3',
    image: 'https://s3-ap-southeast-1.amazonaws.com/karuta.awsvn.org/img/AWSCodeCommit.png'
  },
  {
    text: `It provides automated code deployment  and updates to EC2 instances. It's able to release a new function easily and quickly while avoiding down time.`,
    answer: 'AWS CodeDeploy',
    audio: 'https://s3-ap-southeast-1.amazonaws.com/karuta.awsvn.org/audio/DeploymentManagement_CodeDeploy.mp3',
    image: 'https://s3-ap-southeast-1.amazonaws.com/karuta.awsvn.org/img/CodeDeploy.png'
  },
  {
    text: `It's a continuous delivery service for fast and reliable application updates.
    \nWhen you change a code, you can build, test, and deploy based on the release process models you define.`,
    answer: 'AWS CodePipeline',
    audio: 'https://s3-ap-southeast-1.amazonaws.com/karuta.awsvn.org/audio/DeploymentManagement_CodePipeline.mp3',
    image: 'https://s3-ap-southeast-1.amazonaws.com/karuta.awsvn.org/img/CodePipeline.png'
  },
  {
    text: `This service is a managed cloud platform that lets connected devices easily and securely interact with cloud applications and other devices. 
    \nThis service can support billions of devices and trillions of messages, and can process and route those messages to AWS endpoints and to other devices reliably and securely.`,
    answer: 'AWS IoT',
    audio: 'https://s3-ap-southeast-1.amazonaws.com/karuta.awsvn.org/audio/InternetOfThings_AWS-IOT.mp3',
    image: 'https://s3-ap-southeast-1.amazonaws.com/karuta.awsvn.org/img/AWS-IOT.png'
  },
  {
    text: `It can manage a collection of related AWS resources on using templates.
    \nIt also can deploy and update a template and its associated collection of resources (called a stack).`,
    answer: 'AWS CloudFormation',
    audio: 'https://s3-ap-southeast-1.amazonaws.com/karuta.awsvn.org/audio/ManagementTools_CloudFormation.mp3',
    image: 'https://s3-ap-southeast-1.amazonaws.com/karuta.awsvn.org/img/CloudFormation.png'
  },
  {
    text: `This records the calls to AWS APIs and has the function capable of saving the log file to the specified S3 bucket.
    \nEach time the log file is stored, it is possible to send a notification to Amazon SNS topics.`,
    answer: 'AWS CloudTrail',
    audio: 'https://s3-ap-southeast-1.amazonaws.com/karuta.awsvn.org/audio/ManagementTools_CloudTrail.mp3',
    image: 'https://s3-ap-southeast-1.amazonaws.com/karuta.awsvn.org/img/CloudTrail.png'
  },
  {
    text: `Together with AWS cloud resources, this is a service that can monitor the applications that run on AWS. It also can monitor billing.`,
    answer: 'Amazon CloudWatch',
    audio: 'https://s3-ap-southeast-1.amazonaws.com/karuta.awsvn.org/audio/ManagementTools_CloudWatch.mp3',
    image: 'https://s3-ap-southeast-1.amazonaws.com/karuta.awsvn.org/img/CloudWatch.png'
  },
  {
    text: `A configuration service that provides you with a AWS resource inventory, configuration history, and configuration change notifications to enable security and governance.
    \nThe resource inventory changes the status of the configuration items on the S3 log.
    \nIt is possible to refer to the configuration history of a resource  to view changes in chronological order.`,
    answer: 'AWS Config',
    audio: 'https://s3-ap-southeast-1.amazonaws.com/karuta.awsvn.org/audio/ManagementTools_Config.mp3',
    image: 'https://s3-ap-southeast-1.amazonaws.com/karuta.awsvn.org/img/Config.png'
  },
  {
    text: `Chef recipes that can be utilized to setup the DevOps solutions services.
    \nIt manages a logical model of the layers of various resources.`,
    answer: 'AWS OpsWorks',
    audio: 'https://s3-ap-southeast-1.amazonaws.com/karuta.awsvn.org/audio/ManagementTools_OpsWorks.mp3',
    image: 'https://s3-ap-southeast-1.amazonaws.com/karuta.awsvn.org/img/OpsWorks.png'
  },
  {
    text: `A new console for developing mobile apps.
    \nThe user can develop applications such as user authentication, data storage, content delivery, backend logic, analytics dashboards, and push notifications.`,
    answer: 'AWS Mobile Hub',
    audio: 'https://s3-ap-southeast-1.amazonaws.com/karuta.awsvn.org/audio/MobileServices_AWSMobileHub.mp3',
    image: 'https://s3-ap-southeast-1.amazonaws.com/karuta.awsvn.org/img/AWSMobileHub.png'
  },
  {
    text: `Not only does it provide user authentication and synchronization of data, this simple service safely synchronizes a users application data between mobile devices.`,
    answer: 'Amazon Cognito',
    audio: 'https://s3-ap-southeast-1.amazonaws.com/karuta.awsvn.org/audio/MobileServices_Cognito.mp3',
    image: 'https://s3-ap-southeast-1.amazonaws.com/karuta.awsvn.org/img/Cognito.png'
  },
  {
    text: `Test service for Android, iOS, FireOS applications.`,
    answer: 'AWS Device Farm',
    audio: 'https://s3-ap-southeast-1.amazonaws.com/karuta.awsvn.org/audio/MobileServices_DeviceFarm.mp3',
    image: 'https://s3-ap-southeast-1.amazonaws.com/karuta.awsvn.org/img/DeviceFarm.png'
  },
  {
    text: `With it, you can measure app usage and app revenue. By tracking key trends such as new vs.
    \nreturning users, app revenue, user retention, and custom in-app behavior events, you can make data-driven decisions to increase engagement and monetization for your app.
    \nYou can view key charts in the Mobile Analytics console and automatically export your app event data to Amazon S3 and Amazon Redshift to run custom analysis.`,
    answer: 'Amazon Mobile Analytics',
    audio: 'https://s3-ap-southeast-1.amazonaws.com/karuta.awsvn.org/audio/MobileServices_MobileAnalytics.mp3',
    image: 'https://s3-ap-southeast-1.amazonaws.com/karuta.awsvn.org/img/MobileAnalytics.png'
  },
  {
    text: `It is a fast, flexible, fully managed push notification service that lets you send individual messages or to fan-out messages to large numbers of recipients.
    \nIt makes it simple and cost effective to send push notifications to mobile device users, email recipients or even send messages to other distributed services.`,
    answer: 'Amazon Simple Notification Service(SNS)',
    audio: 'https://s3-ap-southeast-1.amazonaws.com/karuta.awsvn.org/audio/MobileServices_SNS.mp3',
    image: 'https://s3-ap-southeast-1.amazonaws.com/karuta.awsvn.org/img/SNS.png'
  },
  {
    text: `It makes it easy to establish a dedicated network connection from your premises to AWS.`,
    answer: 'AWS Direct Connect (DX)',
    audio: 'https://s3-ap-southeast-1.amazonaws.com/karuta.awsvn.org/audio/Networking_AWSDirectConnect.mp3',
    image: 'https://s3-ap-southeast-1.amazonaws.com/karuta.awsvn.org/img/AWSDirectConnect.png'
  },
  {
    text: `It lets you provision a logically isolated section of the Amazon Web Services (AWS) cloud where you can launch AWS resources in a virtual network that you define.`,
    answer: 'Amazon Virtual Private Cloud (VPC)',
    audio: 'https://s3-ap-southeast-1.amazonaws.com/karuta.awsvn.org/audio/Networking_AmazonVPC.mp3',
    image: 'https://s3-ap-southeast-1.amazonaws.com/karuta.awsvn.org/img/AmazonVPC.png'
  },
  {
    text: `It is a highly available and scalable cloud Domain Name System (DNS) web service.`,
    answer: 'Amazon Route53',
    audio: 'https://s3-ap-southeast-1.amazonaws.com/karuta.awsvn.org/audio/Networking_Route53.mp3',
    image: 'https://s3-ap-southeast-1.amazonaws.com/karuta.awsvn.org/img/Route53.png'
  },
  {
    text: `It helps you meet corporate, contractual and regulatory compliance requirements for data security by using dedicated Hardware Security Module appliances within the AWS cloud.
    \nWith it, you control the encryption keys and cryptographic operations performed by the Hardware Security Module appliances.`,
    answer: 'AWS CloudHSM',
    audio: 'https://s3-ap-southeast-1.amazonaws.com/karuta.awsvn.org/audio/SecurityIdentity_CloudHSM.mp3',
    image: 'https://s3-ap-southeast-1.amazonaws.com/karuta.awsvn.org/img/CloudHSM.png'
  },
  {
    text: `It makes it easy to setup and run Microsoft Active Directory (AD) in the AWS cloud, or connect your AWS resources with an existing on-premises Microsoft Active Directory.`,
    answer: 'AWS Directory Service',
    audio: 'https://s3-ap-southeast-1.amazonaws.com/karuta.awsvn.org/audio/SecurityIdentity_DirectoryService.mp3',
    image: 'https://s3-ap-southeast-1.amazonaws.com/karuta.awsvn.org/img/DirectoryService.png'
  },
  {
    text: `It enables you to securely control access to AWS services and resources for your users.
    \nUsing it, you can create and manage AWS users and groups, and use permissions to allow and deny their access to AWS resources.`,
    answer: 'AWS Identify and Access Management (IAM)',
    audio: 'https://s3-ap-southeast-1.amazonaws.com/karuta.awsvn.org/audio/SecurityIdentity_IdentityAccessManagement.mp3',
    image: 'https://s3-ap-southeast-1.amazonaws.com/karuta.awsvn.org/img/IdentityAccessManagement.png'
  },
  {
    text: `It is a managed service that makes it easy for you to create and control the encryption keys used to encrypt your data, and uses Hardware Security Modules (HSMs) to protect the security of your keys.`,
    answer: 'AWS Key Management Service (KMS)',
    audio: 'https://s3-ap-southeast-1.amazonaws.com/karuta.awsvn.org/audio/SecurityIdentity_KeyManagementService.mp3',
    image: 'https://s3-ap-southeast-1.amazonaws.com/karuta.awsvn.org/img/KeyManagementService.png'
  },
  {
    text: `It is a fully managed service that provides you with an AWS resource inventory, configuration history, and configuration change notifications to enable security and governance.
    \nConfig Rules enables you to create rules that automatically check the configuration of AWS resources recorded by it.`,
    answer: 'AWS Service Catalog',
    audio: 'https://s3-ap-southeast-1.amazonaws.com/karuta.awsvn.org/audio/ManagementTools_ServiceCatalog.mp3',
    image: 'https://s3-ap-southeast-1.amazonaws.com/karuta.awsvn.org/img/ServiceCatalog.png'
  },
  {
    text: `An online resource to help you reduce cost, increase performance, and improve security by optimizing your AWS environment, It provides real time guidance to help you provision your resources following AWS best practices.`,
    answer: 'AWS Trusted Advisor',
    audio: 'https://s3-ap-southeast-1.amazonaws.com/karuta.awsvn.org/audio/SecurityIdentity_TrustedAdvisor.mp3',
    image: 'https://s3-ap-southeast-1.amazonaws.com/karuta.awsvn.org/img/TrustedAdvisor.png'
  },
  {
    text: `It is a web application firewall that helps protect your web applications from common web exploits that could affect application availability, compromise security, or consume excessive resources.`,
    answer: 'AWS Web Application Firewall (WAF)',
    audio: 'https://s3-ap-southeast-1.amazonaws.com/karuta.awsvn.org/audio/SecurityIdentity_WebAppFirewall.mp3',
    image: 'https://s3-ap-southeast-1.amazonaws.com/karuta.awsvn.org/img/WebAppFirewall.png'
  },
  {
    text: `It is a service that accelerates transferring large amounts of data into and out of AWS using physical storage appliances, bypassing the Internet.`,
    answer: 'AWS Import/Export',
    audio: 'https://s3-ap-southeast-1.amazonaws.com/karuta.awsvn.org/audio/StorageContentDelivery_AWSIMportExport.mp3',
    image: 'https://s3-ap-southeast-1.amazonaws.com/karuta.awsvn.org/img/AWSIMportExport.png'
  },
  {
    text: `It is a global content delivery network (CDN) service that accelerates delivery of your websites, APIs, video content or other web assets.`,
    answer: 'Amazon CloudFront',
    audio: 'https://s3-ap-southeast-1.amazonaws.com/karuta.awsvn.org/audio/StorageContentDelivery_AmazonCloudFront.mp3',
    image: 'https://s3-ap-southeast-1.amazonaws.com/karuta.awsvn.org/img/AmazonCloudFront.png'
  },
  {
    text: `It is a secure, durable, and extremely low-cost cloud storage service for data archiving and long-term backup. You can access this through the Management Console or Amazon S3 API's to manage data.`,
    answer: 'Amazon Glacier',
    audio: 'https://s3-ap-southeast-1.amazonaws.com/karuta.awsvn.org/audio/StorageContentDelivery_AmazonGlacier.mp3',
    image: 'https://s3-ap-southeast-1.amazonaws.com/karuta.awsvn.org/img/AmazonGlacier.png'
  },
  {
    text: `It is a simple web service interface that stores and retrieves any amount of data from anywhere on the web. It also provides static website hosting.`,
    answer: 'Amazon Simple Storage Service (S3)',
    audio: 'https://s3-ap-southeast-1.amazonaws.com/karuta.awsvn.org/audio/StorageContentDelivery_AmazonS3.mp3',
    image: 'https://s3-ap-southeast-1.amazonaws.com/karuta.awsvn.org/img/AmazonS3.png'
  },
  {
    text: `It is a service connecting an on-premises software appliance with cloud-based storage to provide seamless and secure integration between an organization’s on-premises IT environment and AWS’s storage infrastructure.
    \nIt can connect to the iSCSI interface which provides virtual storage.`,
    answer: 'AWS Storage Gateway',
    audio: 'https://s3-ap-southeast-1.amazonaws.com/karuta.awsvn.org/audio/StorageContentDelivery_AmazonStorageGateway.mp3',
    image: 'https://s3-ap-southeast-1.amazonaws.com/karuta.awsvn.org/img/AmazonStorageGateway.png'
  },
  {
    text: `It's a Network File System version 4 protocol supported elastic file storage service.`,
    answer: 'Amazon Elastic File System (EFS)',
    audio: 'https://s3-ap-southeast-1.amazonaws.com/karuta.awsvn.org/audio/StorageContentDelivery_EFS.mp3',
    image: 'https://s3-ap-southeast-1.amazonaws.com/karuta.awsvn.org/img/EFS.png'
  },
  {
    text: `A petabyte-scale data transport solution that uses secure appliances to transfer large amounts of data into and out of the AWS cloud. Using it.`,
    answer: 'Snowball',
    audio: 'https://s3-ap-southeast-1.amazonaws.com/karuta.awsvn.org/audio/StorageContentDelivery_Snowball.mp3',
    image: 'https://s3-ap-southeast-1.amazonaws.com/karuta.awsvn.org/img/Snowball.png'
  },
  {
    text: `It is an automated security assessment service that helps improve the security and compliance of applications deployed on AWS.`,
    answer: 'Amazon Inspector',
    audio: 'https://s3-ap-southeast-1.amazonaws.com/karuta.awsvn.org/audio/Security-Identity_AmazonInspector.mp3',
    image: 'https://s3-ap-southeast-1.amazonaws.com/karuta.awsvn.org/img/AmazonInspector.png'
  },
  {
    text: `It is a service that lets you easily provision, manage, and deploy Secure Sockets Layer/Transport Layer Security (SSL/TLS) certificates for use with AWS services.`,
    answer: 'AWS Certificate Manager',
    audio: 'https://s3-ap-southeast-1.amazonaws.com/karuta.awsvn.org/audio/SecurityIdentity_CertificateManager.mp3',
    image: 'https://s3-ap-southeast-1.amazonaws.com/karuta.awsvn.org/img/CertificateManager.png'
  },
  {
    text: `It can help you ensure that your application always has the right amount of capacity to handle the current traffic demands.
    \nIt can dynamically increase and decrease capacity as needed.`,
    answer: 'Amazon EC2 Auto Scaling',
    audio: 'https://s3-ap-southeast-1.amazonaws.com/karuta.awsvn.org/audio/Compute_AmazonEC2_AutoScaling.mp3',
    image: 'https://s3-ap-southeast-1.amazonaws.com/karuta.awsvn.org/img/AutoScaling.png'
  },
  {
    text: `This enables you to bid on unused EC2 instances, which can lower your Amazon EC2 costs significantly.`,
    answer: 'Amazon EC2 Spot Instance',
    audio: 'https://s3-ap-southeast-1.amazonaws.com/karuta.awsvn.org/audio/Compute_AmazonEC2_Spotinstance.mp3',
    image: 'https://s3-ap-southeast-1.amazonaws.com/karuta.awsvn.org/img/Spotinstance.png'
  },
  {
    text: `It is a horizontally scaled, redundant, and highly available VPC component that allows communication between instances in your VPC and the Internet.`,
    answer: 'Internet Gateway',
    audio: 'https://s3-ap-southeast-1.amazonaws.com/karuta.awsvn.org/audio/Networking_AmazonVPC_internetgateway.mp3',
    image: 'https://s3-ap-southeast-1.amazonaws.com/karuta.awsvn.org/img/internetgateway.png'
  },
  {
    text: `This VPC component refers to the connection between your VPC and your own network.`,
    answer: 'Virtua Private Gateway',
    audio: 'https://s3-ap-southeast-1.amazonaws.com/karuta.awsvn.org/audio/Networking_AmazonVPC_VPNgateway.mp3',
    image: 'https://s3-ap-southeast-1.amazonaws.com/karuta.awsvn.org/img/VPNgateway.png'
  },
  {
    text: `It allows you to route traffic between the VPCs using private IP addresses; as if they are part of the same network.`,
    answer: 'VPC Peering',
    audio: 'https://s3-ap-southeast-1.amazonaws.com/karuta.awsvn.org/audio/Networking_AmazonVPC_VPCpeering.mp3',
    image: 'https://s3-ap-southeast-1.amazonaws.com/karuta.awsvn.org/img/VPCpeering.png'
  },
  {
    text: `A collection of resource record sets that Amazon Route 53 hosts.
    \nLike a traditional DNS zone file, it represents a collection of records that are managed together under a single domain name.
    \nFor each public one of these that you create, Amazon Route 53 automatically creates a name server (NS) resource record set and a start of authority (SOA) resource record set.`,
    answer: 'Hosted Zone',
    audio: 'https://s3-ap-southeast-1.amazonaws.com/karuta.awsvn.org/audio/Networking_AmazonRoute53_hostedzone.mp3',
    image: 'https://s3-ap-southeast-1.amazonaws.com/karuta.awsvn.org/img/hostedzone.png'
  },
  {
    text: `To store an object in Amazon S3, you must create this container.
    \nThe name you choose must be unique across all existing bucket names in Amazon S3.`,
    answer: 'Amazon S3 Bucket',
    audio: 'https://s3-ap-southeast-1.amazonaws.com/karuta.awsvn.org/audio/StorageContentDelivery_AmazonS3_bucket.mp3',
    image: 'https://s3-ap-southeast-1.amazonaws.com/karuta.awsvn.org/img/bucket.png'
  },
  {
    text: `Using a network of them around the world, Amazon CloudFront caches copies of your static content close to viewers, lowering latency when they download your objects and giving you the high, sustained data transfer rates needed to deliver large popular objects to end users at scale.`,
    answer: 'Amazon CloudFront Edge Locations',
    audio: 'https://s3-ap-southeast-1.amazonaws.com/karuta.awsvn.org/audio/StorageContentDelivery_AmazonCloudFront_edgelocation.mp3',
    image: 'https://s3-ap-southeast-1.amazonaws.com/karuta.awsvn.org/img/edgelocation.png'
  },
  {
    text: `It provides block level storage volumes for use with EC2 instances. It's volumes are attached to an EC2 instance are exposed as storage volumes that persist independently from the life of the instance.`,
    answer: 'Amazon Elastic Block Store',
    audio: 'https://s3-ap-southeast-1.amazonaws.com/karuta.awsvn.org/audio/StorageContentDelivery_AmazonEBS.mp3',
    image: 'https://s3-ap-southeast-1.amazonaws.com/karuta.awsvn.org/img/AmazonEBS.png'
  },
  {
    text: `An audit and compliance portal for on-demand access to download AWS compliance reports and manage select agreements like the Business Associate Addendum and the Nondisclosure Agreement.`,
    answer: 'AWSArtifact',
    audio: 'https://s3-ap-southeast-1.amazonaws.com/karuta.awsvn.org/audio/AWSArtifact.mp3',
    image: 'https://s3-ap-southeast-1.amazonaws.com/karuta.awsvn.org/img/AWSArtifact.png'
  },
  {
    text: `It enables developers, scientists, and engineers to easily and efficiently run hundreds of thousands of batch computing jobs on AWS.`,
    answer: 'AWSBatch',
    audio: 'https://s3-ap-southeast-1.amazonaws.com/karuta.awsvn.org/audio/AWSBatch.mp3',
    image: 'https://s3-ap-southeast-1.amazonaws.com/karuta.awsvn.org/img/AWSBatch.png'
  },
  {
    text: `It helps enterprise customers plan migration projects by gathering information about their on-premises data centers like discovering On-Premises Infrastructure, identify server dependencies and measuring server performance.`,
    answer: 'AWSApplicationDiscoveryService',
    audio: 'https://s3-ap-southeast-1.amazonaws.com/karuta.awsvn.org/audio/AWSApplicationDiscoveryService.mp3',
    image: 'https://s3-ap-southeast-1.amazonaws.com/karuta.awsvn.org/img/AWSApplicationDiscoveryService.png'
  },
  {
    text: `It is a fully managed build service that compiles source code, runs tests, and produces software packages that are ready to deploy.`,
    answer: 'AWSCodeBuild',
    audio: 'https://s3-ap-southeast-1.amazonaws.com/karuta.awsvn.org/audio/AWSCodeBuild.mp3',
    image: 'https://s3-ap-southeast-1.amazonaws.com/karuta.awsvn.org/img/AWSCodeBuild.png'
  },
  {
    text: `It is software that lets you run local compute, messaging, data caching, and sync capabilities for connected devices in a secure way.
    \nconnected devices can run AWS Lambda functions, keep device data in sync, and communicate with other devices securely – even when not connected to the Internet.`,
    answer: 'AWSGreengrass',
    audio: 'https://s3-ap-southeast-1.amazonaws.com/karuta.awsvn.org/audio/AWSGreengrass.mp3',
    image: 'https://s3-ap-southeast-1.amazonaws.com/karuta.awsvn.org/img/AWSGreengrass.png'
  },
  {
    text: `It provides ongoing management of your AWS infrastructure so you can focus on your applications.
    \nBy implementing best practices to maintain your infrastructure, It helps to reduce your operational overhead and risk.`,
    answer: 'AWSManagedServices',
    audio: 'https://s3-ap-southeast-1.amazonaws.com/karuta.awsvn.org/audio/AWSManagedServices.mp3',
    image: 'https://s3-ap-southeast-1.amazonaws.com/karuta.awsvn.org/img/AWSManagedServices.png'
  },
  {
    text: `It offers policy-based management for multiple AWS accounts.
    \nYou can create groups of accounts and then apply policies to those groups.`,
    answer: 'AWSOrganizations',
    audio: 'https://s3-ap-southeast-1.amazonaws.com/karuta.awsvn.org/audio/AWSOrganizations.mp3',
    image: 'https://s3-ap-southeast-1.amazonaws.com/karuta.awsvn.org/img/AWSOrganizations.png'
  },
  {
    text: `It is an agentless service which makes it easier and faster for you to migrate thousands of on-premises workloads to AWS.
    \nIt allows you to automate, schedule, and track incremental replications of live server volumes, making it easier for you to coordinate large-scale server migrations.`,
    answer: 'AWSServerMigrationService',
    audio: 'https://s3-ap-southeast-1.amazonaws.com/karuta.awsvn.org/audio/AWSServerMigrationService.mp3',
    image: 'https://s3-ap-southeast-1.amazonaws.com/karuta.awsvn.org/img/AWSServerMigrationService.png'
  },
  {
    text: `It is a managed Distributed Denial of Service (DDoS) protection service that safeguards web applications running on AWS. There are two tiers of it - Standard and Advanced.`,
    answer: 'AWSShield',
    audio: 'https://s3-ap-southeast-1.amazonaws.com/karuta.awsvn.org/audio/AWSShield.mp3',
    image: 'https://s3-ap-southeast-1.amazonaws.com/karuta.awsvn.org/img/AWSShield.png'
  },
  {
    text: `It makes it easy to coordinate the components of distributed applications and microservices using visual workflows.
    \nIt is part of the AWS Serverless Platform, and makes it simple to orchestrate AWS Lambda functions for serverless applications.`,
    answer: 'AWSStepFunctions',
    audio: 'https://s3-ap-southeast-1.amazonaws.com/karuta.awsvn.org/audio/AWSStepFunctions.mp3',
    image: 'https://s3-ap-southeast-1.amazonaws.com/karuta.awsvn.org/img/AWSStepFunctions.png'
  },
  {
    text: `It helps developers analyze and debug production, distributed applications, such as those built using a microservices architecture.
    \nYou can understand how your application and its underlying services are performing to identify and troubleshoot the root cause of performance issues and errors.`,
    answer: 'AWSX-Ray',
    audio: 'https://s3-ap-southeast-1.amazonaws.com/karuta.awsvn.org/audio/AWSX-Ray.mp3',
    image: 'https://s3-ap-southeast-1.amazonaws.com/karuta.awsvn.org/img/AWSX-Ray.png'
  },
  {
    text: `It is an interactive query service that makes it easy to analyze data in Amazon S3 using standard SQL. It is serverless, so there is no infrastructure to manage, and you pay only for the queries that you run.`,
    answer: 'AmazonAthena',
    audio: 'https://s3-ap-southeast-1.amazonaws.com/karuta.awsvn.org/audio/AmazonAthena.mp3',
    image: 'https://s3-ap-southeast-1.amazonaws.com/karuta.awsvn.org/img/AmazonAthena.png'
  },
  {
    text: `It is a managed service for deploying, operating, and scaling dedicated game servers for session-based multiplayer games.`,
    answer: 'AmazonGameLift',
    audio: 'https://s3-ap-southeast-1.amazonaws.com/karuta.awsvn.org/audio/AmazonGameLift.mp3',
    image: 'https://s3-ap-southeast-1.amazonaws.com/karuta.awsvn.org/img/AmazonGameLift.png'
  },
  {
    text: `It is a service for building conversational interfaces into any application using voice and text.`,
    answer: 'AmazonLex',
    audio: 'https://s3-ap-southeast-1.amazonaws.com/karuta.awsvn.org/audio/AmazonLex.mp3',
    image: 'https://s3-ap-southeast-1.amazonaws.com/karuta.awsvn.org/img/AmazonLex.png'
  },
  {
    text: `You can launch a virtual private server (VPS) with just a few clicks.`,
    answer: 'AmazonLightsail',
    audio: 'https://s3-ap-southeast-1.amazonaws.com/karuta.awsvn.org/audio/AmazonLightsail.mp3',
    image: 'https://s3-ap-southeast-1.amazonaws.com/karuta.awsvn.org/img/AmazonLightsail.png'
  },
  {
    text: `It makes it easy to message users directly from your application or backend service, or run targeted campaigns to drive user engagement.
    \nYou  can understand user behavior, select the best channel to engage users, determine the most effective messages to send, schedule the best time to deliver the messages, and then track user engagement.`,
    answer: 'AmazonPinpoint',
    audio: 'https://s3-ap-southeast-1.amazonaws.com/karuta.awsvn.org/audio/AmazonPinpoint.mp3',
    image: 'https://s3-ap-southeast-1.amazonaws.com/karuta.awsvn.org/img/AmazonPinpoint.png'
  },
  {
    text: `It is me. It is a service that turns text into lifelike speech, allowing you to create applications that talk, and build entirely new categories of speech-enabled products.`,
    answer: 'AmazonPolly',
    audio: 'https://s3-ap-southeast-1.amazonaws.com/karuta.awsvn.org/audio/AmazonPolly.mp3',
    image: 'https://s3-ap-southeast-1.amazonaws.com/karuta.awsvn.org/img/AmazonPolly.png'
  },
  {
    text: `It is a service that makes it easy to add image analysis to your applications with deep learning technology.`,
    answer: 'AmazonRekognition',
    audio: 'https://s3-ap-southeast-1.amazonaws.com/karuta.awsvn.org/audio/AmazonRekognition.mp3',
    image: 'https://s3-ap-southeast-1.amazonaws.com/karuta.awsvn.org/img/AmazonRekognition.png'
  },
  {
    text: `It is a communications service that transforms online meetings with a secure, easy-to-use application that you can trust.`,
    answer: 'AmazonChime',
    audio: 'https://s3-ap-southeast-1.amazonaws.com/karuta.awsvn.org/audio/AmazonChime.mp3',
    image: 'https://s3-ap-southeast-1.amazonaws.com/karuta.awsvn.org/img/AmazonChime.png'
  },
  {
    text: `It is a security service that uses machine learning to automatically discover, classify, and protect sensitive data in AWS.
    \nIt recognizes sensitive data such as personally identifiable information (PII) or intellectual property, and provides you with dashboards and alerts that give visibility into how this data is being accessed or moved.`,
    answer: 'AmazonMacie',
    audio: 'https://s3-ap-southeast-1.amazonaws.com/karuta.awsvn.org/audio/AmazonMacie.mp3',
    image: 'https://s3-ap-southeast-1.amazonaws.com/karuta.awsvn.org/img/AmazonMacie.png'
  },
  {
    text: `It is a self-service, cloud-based contact center service that makes it easy for any business to deliver better customer service at lower cost.`,
    answer: 'AmzonConnect',
    audio: 'https://s3-ap-southeast-1.amazonaws.com/karuta.awsvn.org/audio/AmzonConnect.mp3',
    image: 'https://s3-ap-southeast-1.amazonaws.com/karuta.awsvn.org/img/AmzonConnect.png'
  }
]

export default _questions
