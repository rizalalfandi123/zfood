<script setup lang="ts">
const countries = [
  {
    strArea: "American",
    id: "us",
  },
  {
    strArea: "British",
    id: "gb",
  },
  {
    strArea: "Canadian",
    id: "ca",
  },
  {
    strArea: "Chinese",
    id: "cn",
  },
  {
    strArea: "Croatian",
    id: "sk",
  },
  {
    strArea: "Dutch",
    id: "nl",
  },
  {
    strArea: "Egyptian",
    id: "eg",
  },
  {
    strArea: "Filipino",
    id: "ph",
  },
  {
    strArea: "French",
    id: "fr",
  },
  {
    strArea: "Greek",
    id: "gr",
  },
  {
    strArea: "Indian",
    id: "in",
  },
  {
    strArea: "Irish",
    id: "ie",
  },
  {
    strArea: "Italian",
    id: "it",
  },
  {
    strArea: "Jamaican",
    id: "jm",
  },
  {
    strArea: "Japanese",
    id: "jp",
  },
  {
    strArea: "Kenyan",
    id: "ky",
  },
  {
    strArea: "Malaysian",
    id: "my",
  },
  {
    strArea: "Mexican",
    id: "mx",
  },
  {
    strArea: "Moroccan",
    id: "ma",
  },
  {
    strArea: "Polish",
    id: "pl",
  },
  {
    strArea: "Portuguese",
    id: "pt",
  },
  {
    strArea: "Russian",
    id: "ru",
  },
  {
    strArea: "Spanish",
    id: "es",
  },
  {
    strArea: "Thai",
    id: "th",
  },

  {
    strArea: "Turkish",
    id: "tn",
  },
  {
    strArea: "Vietnamese",
    id: "vn",
  },
];
</script>

<template>
  <section class="space-y-2">
    <h1 class="text-2xl font-medium tracking-wide">Browse by Country</h1>

    <ul class="w-full overflow-x-auto flex gap-4 thin-scrollbar">
      <li v-for="country in countries" :key="country.id">
        <NuxtLink :to="`/meal-by-country/${country.strArea}`">
          <div class="w-20 shrink-0 flex flex-col justify-center items-center hover:text-primary">
            <img
              :src="`https://www.themealdb.com/images/icons/flags/big/64/${country.id}.png`"
              :alt="country.strArea"
              class="w-20 h-16 object-cover ring-gray-400 hover:ring-primary"
            />

            <p>{{ country.strArea }}</p>
          </div>
        </NuxtLink>
      </li>
    </ul>
  </section>
</template>
