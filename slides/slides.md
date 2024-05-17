---
theme: seriph
background: none
title: Message broker implementation with Kafka
info: |
  ## Message broker implementation with Kafka
class: text-center
highlighter: shiki
drawings:
  persist: false
transition: slide-up
mdc: true
favicon: '/img/favicon.jpg'
---
# Message broker implementation with Kafka
@andikadeveloper


---
transition: slide-left
layout: center
class: text-center
---
## Monolith vs Microservices


---
transition: slide-left
layout: center
class: text-center
---
<img src="/img/simple-marketplace.png" class="m-10 h-120 rounded shadow" />


---
transition: slide-left
layout: two-cols
class: text-center
---


<template v-slot:default>

## Monolith

<img src="/img/monolith.png" class="m-10 h-100 rounded shadow" />

</template>
<template v-slot:right>

## Microservices

<img src="/img/microservices.png" class="mt-20 h-50 rounded shadow" >

</template>


---
transition: slide-up
layout: center
class: text-center
---
## Microservices Communication
<img src="/img/microservices-communication.png" class="m-10 h-100 rounded shadow" />


---
transition: slide-left
layout: center
class: text-center
---

## API Driven


---
transition: slide-left
layout: center
class: text-center
---
## Latency
<img src="/img/api-driven-latency.png" class="ml-10 mt-10 h-100 rounded shadow" />


---
layout: center
class: text-center
transition: slide-left
---
## High Coupling


---
layout: center
class: text-center
transition: slide-left
---
<img src="/img/microservices-communication.png" class="m-10 h-100 rounded shadow" />


---
layout: center
class: text-center
transition: slide-left
---
<img src="/img/high-coupling.png" class="m-10 h-100 rounded shadow" />


---
layout: center
class: text-center
transition: slide-left
---
<img src="/img/high-coupling-error.png" class="m-10 h-100 rounded shadow" />


---
layout: center
class: text-center
transition: slide-up
---
<img src="https://media.istockphoto.com/id/824614192/id/foto/pria-marah-frustrasi-membaca-pesan-teks-di-smartphone-nya-meniup-uap-keluar-dari-telinga.jpg?s=612x612&w=0&k=20&c=Puj_3XFcFn6fC5zzhDouufFkGDq1-kwe3YgoGKO5Qfc=" alt="Customer angry">


---
layout: center
class: text-center
transition: slide-left
---
## Event Driven


---
layout: center
class: text-center
transition: slide-left
---
<img src="/img/event-driven.png" class="m-10 h-100 rounded shadow" />


---
layout: center
class: text-center
transition: slide-left
---
## Asynchronous
<img src="/img/event-driven.png" class="m-10 h-100 rounded shadow" />


---
layout: center
class: text-center
transition: slide-left
---
## Loose Coupling
<img src="/img/event-driven-error.png" class="m-10 h-100 rounded shadow" />


---
transition: slide-up
layout: two-cols
class: text-center
---
<template v-slot:default>

## API driven

<img src="/img/microservices-communication.png" class="mt-10 h-80 rounded shadow" />

</template>
<template v-slot:right>

## Event driven

<img src="/img/event-driven.png" class="mt-10 ml-20 h-80 rounded shadow" />

</template>


---
layout: center
class: text-center
transition: slide-left
---
## Message Broker


---
transition: slide-left
layout: center
class: text-center
---
<img src="/img/message-broker.png" class="m-10 h-100 rounded shadow" />


---
transition: slide-left
layout: center
class: text-left
---
1. Producer / Publisher
2. Consumer / Subscriber
3. Topic


---
transition: slide-up
layout: center
class: text-center
---
<img src="/img/message-broker-architecture.png" class="m-10 h-100 rounded shadow" />


---
transition: slide-up
layout: center
class: text-center
---
## Apache Kafka
<img src="/img/apache-kafka.png" class="m-10 h-40 rounded shadow" />

---
transition: slide-left
layout: center
class: text-center
---
## Practice

<v-click>
<p class="text-gray-500">Move existing application communication from Rest API to Message Broker</p>
</v-click>


---
transition: slide-left
layout: center
class: text-center
---
<img src="/img/api-driven-practice.png" class="m-10 h-130 rounded shadow" />


---
transition: slide-left
layout: center
class: text-center
---
<img src="/img/message-broker-practice.png" class="m-10 h-130 rounded shadow" />


---
transition: slide-up
layout: center
class: text-center
---
<img src="/img/message-broker-practice-multi.png" class="m-10 h-130 rounded shadow" />


---
transition: slide-left
layout: center
class: text-center
---

## Thanks
<p class="text-gray-500">@andikadeveloper</p>
