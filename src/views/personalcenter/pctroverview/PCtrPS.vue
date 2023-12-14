<template>
    <div class="PS">
        <div class="OperateConsole">
            <el-upload v-model:file-list="fileList" class="upload-demo"
                action="" :on-preview="handlePreview"
                :on-change="handleChange" :on-remove="handleRemove" list-type="picture">
                <el-button type="primary">选择图片</el-button>
                <template #tip>
                    <div class="el-upload__tip">
                        图片文件大小不要超过500kb
                    </div>
                </template>
            </el-upload>
        </div>
        <div class="OperateConsoleImageLine">

        </div>
        <div class="Image">
            <el-image class="elImage" v-if="data.imageUrl" :src="data.imageUrl" alt="Uploaded Image" fit="contain" />
        </div>
    </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'
import type { UploadProps, UploadUserFile } from 'element-plus'


const data = reactive({
    imageUrl: ""
})

const fileList = ref<UploadUserFile[]>([
    // {
    //     name: 'food.jpeg',
    //     url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100',
    // },

])

const handleRemove: UploadProps['onRemove'] = (uploadFile, uploadFiles) => {
    console.log("1", uploadFile, uploadFiles)
}

const handlePreview: UploadProps['onPreview'] = (file) => {
    console.log("2", file)
}

const handleChange = (file: any) => {
    data.imageUrl = URL.createObjectURL(file.raw)
    const newFile = {name:file.name, url:file.url}
    fileList.value.push(newFile)
    console.log(file);
}


</script>
<style lang="scss" scoped>
.PS {
    display: flex;
    height: calc(100vh - 100px);
}

.OperateConsole {
    width: 20%;
    height: 100%;
}

.OperateConsoleImageLine {
    margin: 0% 1%;
    height: 100%;
    border: 1px solid black;

}

.Image {
    display: flex;
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
}

.elImage {
    
}
</style>