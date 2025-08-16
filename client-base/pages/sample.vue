<template>
  <div>
    <h1>サンプルのページです</h1>

    <div v-if="pending">読み込み中...</div>

    <div v-else-if="error" class="error">
      エラーが発生しました: {{ error.message }}
    </div>

    <div v-else-if="books && books.length > 0">
      <h2>書籍一覧</h2>
      <ul>
        <li v-for="book in books" :key="book.id">
          <strong>{{ book.title }}</strong> - {{ book.author }}
        </li>
      </ul>
    </div>

    <div v-else>
      書籍データが見つかりません
    </div>
  </div>
</template>

<script setup>
const { data: books, pending, error, refresh } = await useFetch('/books')

// ページリフレッシュ時にもデータを再取得
onMounted(() => {
  refresh()
})
</script>

<style scoped>
.error {
  color: red;
  font-weight: bold;
}

h1 {
  color: #2c3e50;
  margin-bottom: 20px;
}

h2 {
  color: #34495e;
  margin-bottom: 15px;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  padding: 10px;
  margin: 5px 0;
  background-color: #f8f9fa;
  border-radius: 5px;
  border-left: 4px solid #007bff;
}
</style>
