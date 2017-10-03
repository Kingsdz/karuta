const _questions = [
  { id: 1,
    text: `It is a cost-effective email service built 
      on the reliable and scalable infrastructure that Amazon.com 
      developed to serve its own customer base.`,
    answer: 'Amazon Simple Email Service (Amazon SES)',
    audio: 'http://aws-karuta.s3-website.ap-northeast-2.amazonaws.com/audio/mp3/ApplicationServices_AmazonSES.mp3',
    image: 'http://aws-karuta.s3-website.ap-northeast-2.amazonaws.com/img/AmazonSES.png'
  },
  { id: 2,
    text: `It is an automated security assessment service that helps improve the security and 
      compliance of applications deployed on AWS.`,
    answer: 'Amazon Inspector',
    audio: 'http://aws-karuta.s3-website.ap-northeast-2.amazonaws.com/audio/mp3/Security-Identity_AmazonInspector.mp3',
    image: 'http://aws-karuta.s3-website.ap-northeast-2.amazonaws.com/img/AmazonInspector.png'
  },
  { id: 3,
    text: `This service improves the performance of web 
      applications by retrieving information from managed in-memory caches such as memcached or Redis.`,
    answer: 'Amazon ElastiCache',
    audio: 'http://aws-karuta.s3-website.ap-northeast-2.amazonaws.com/audio/mp3/Database_AmazonElasticCache.mp3',
    image: 'http://aws-karuta.s3-website.ap-northeast-2.amazonaws.com/img/AmazonElasticCache.png'
  },
  { id: 4,
    text: `It's a Network File System version 4 protocol supported elastic file storage service.`,
    answer: 'Amazon Elastic File System (EFS)',
    audio: 'http://aws-karuta.s3-website.ap-northeast-2.amazonaws.com/audio/mp3/StorageContentDelivery_EFS.mp3',
    image: 'http://aws-karuta.s3-website.ap-northeast-2.amazonaws.com/img/EFS.png'
  },
  { id: 5,
    text: `It lets you provision a logically isolated section of 
      the Amazon Web Services (AWS) cloud where you can launch AWS resources in a virtual network that you define.`,
    answer: 'Amazon Virtual Private Cloud (VPC)',
    audio: 'http://aws-karuta.s3-website.ap-northeast-2.amazonaws.com/audio/mp3/Networking_AmazonVPC.mp3',
    image: 'http://aws-karuta.s3-website.ap-northeast-2.amazonaws.com/img/AmazonVPC.png'
  },
  { id: 6,
    text: `It is an agentless service which makes it easier and faster for you to migrate thousands of on-premises workloads to AWS.
      \nIt allows you to automate, schedule, and track incremental replications of live server volumes, making it easier for you to coordinate large-scale server migrations.`,
    answer: 'AWSServerMigrationService',
    audio: 'http://aws-karuta.s3-website.ap-northeast-2.amazonaws.com/audio/mp3/AWSServerMigrationService.mp3',
    image: 'http://aws-karuta.s3-website.ap-northeast-2.amazonaws.com/img/AWSServerMigrationService.png'
  },
  { id: 7,
    text: `It allows you to route traffic between the VPCs using private IP addresses; as if they are part of the same network.`,
    answer: 'VPC Peering',
    audio: 'http://aws-karuta.s3-website.ap-northeast-2.amazonaws.com/audio/mp3/Networking_AmazonVPC_VPCpeering.mp3',
    image: 'http://aws-karuta.s3-website.ap-northeast-2.amazonaws.com/img/VPCpeering.png'
  },
  { id: 8,
    text: `Chef recipes that can be utilized to setup the DevOps solutions services. It manages a logical model of the layers of various resources.`,
    answer: 'AWS OpsWorks',
    audio: 'http://aws-karuta.s3-website.ap-northeast-2.amazonaws.com/audio/mp3/ManagementTools_OpsWorks.mp3',
    image: 'http://aws-karuta.s3-website.ap-northeast-2.amazonaws.com/img/OpsWorks.png'
  },
  { id: 9,
    text: `It automatically distributes incoming application traffic across multiple Amazon EC2 instances.`,
    answer: 'Amazon Elastic Load Balancer (ELB)',
    audio: 'http://aws-karuta.s3-website.ap-northeast-2.amazonaws.com/audio/mp3/Compute_ElasticLoadBalancing.mp3',
    image: 'http://aws-karuta.s3-website.ap-northeast-2.amazonaws.com/img/ElasticLoadBalancing.png'
  },
  { id: 10,
    text: `It is media transcoding in the cloud that is highly scalable, easy to use, 
      and a cost effective way to convert (or “transcode”) media files from their source format into versions that will playback on devices like smartphones, tablets and PCs.
      \nYou can also create an audio-only alternate stream.`,
    answer: 'Amazon Elastic Transcoder',
    audio: 'http://aws-karuta.s3-website.ap-northeast-2.amazonaws.com/audio/mp3/ApplicationServices_AmazonElasticTranscoder.mp3',
    image: 'http://aws-karuta.s3-website.ap-northeast-2.amazonaws.com/img/AmazonElasticTranscoder.png'
  }
]

export default _questions
