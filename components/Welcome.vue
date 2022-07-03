<template>
  <div class="bg-gray-100 h-screen w-screen flex justify-center items-center">
    <div class="bg-white rounded p-8 m-5 shadow">
      <h1 class="font-logo font-bold text-center text-3xl">
        Multi<span class="text-green-600">V</span>ue
      </h1>
      <p class="text-xl font-bold">（手順）</p>
      <ul class="list-disc">
        <li>
          右のファイルを参考に、表示する画面urlの一覧をcsvで作成する<a
            href="/namelist.csv"
            class="text-blue-500 hover:underline"
            >[ファイル]</a
          >
        </li>
        <li>下のアップローダに投稿する</li>
        <li>Submitを押す</li>
      </ul>
      <div
        class="drop-area"
        :class="{ droped: isEnter }"
        @dragenter="dragEnter"
        @dragleave="dragEnter"
        @dragover.prevent
        @drop.prevent="dropFile"
      >
        ファイルアップロード
      </div>
      <p>{{ userList }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NuxtTutorial',
  data() {
    return {
      isEnter: false,
      userList: [],
    }
  },
  methods: {
    dragEnter() {
      this.isEnter = true
    },
    dragLeave() {
      this.isEnter = false
    },
    dropFile(event) {
      const reader = new FileReader()
      reader.readAsText(event.dataTransfer.files[0])

      reader.onload = function (event) {
        const result = event.target.result
        const jsonArray = []
        const RowArray = result.split('\n')
        const items = RowArray[0].split(',')
        for (let i = 1; i < RowArray.length; i++) {
          const cellArray = RowArray[i].split(',')
          const line = {}
          for (let j = 0; j < items.length; j++) {
            line[items[j]] = cellArray[j]
          }
          jsonArray.push(line)
        }
        this.userList = jsonArray
      }
    },
  },
}
</script>

<style>
.drop-area {
  color: gray;
  font-weight: bold;
  font-size: 1.2em;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 500px;
  height: 300px;
  border: 5px solid gray;
  border-radius: 15px;
}

.droped {
  border: 10px dotted powderblue;
}
</style>
