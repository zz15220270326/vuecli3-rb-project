<template>
  <div class="add-content">
    <div class="title">
      <div class="tag">
        <Tag color="lime" size="large">标题</Tag>
      </div>
      <div class="content">
        <Input
          v-model="inputTitle"
          maxlength="30"
          placeholder="输入长度不得超过30"
        />
      </div>
    </div>
    <div class="introduce">
      <div class="tag">
        <Tag color="lime" size="large">简介</Tag>
      </div>
      <div class="content">
        <Input
          v-model="inputIntroduce"
          type="textarea"
          :rows="3"
          maxlength="100"
          placeholder="简介(不超过100字符)"
        />
      </div>
    </div>
    <div class="is-set-top">
      <div class="tag">
        <Tag color="pink" size="large">是否置顶</Tag>
      </div>
      <div class="content">
        <RadioGroup v-model="isSetTop">
          <Radio label="是" />
          <Radio label="否" />
        </RadioGroup>
      </div>
    </div>
    <div class="upload-image">
      <div class="tag">
        <Tag color="purple" size="large">上传图片</Tag>
      </div>
      <div class="content">
        <Upload
          id="upload"
          action="http://localhost:80"
          :before-upload="handleOnSuccess"
          :multiple="false"
          :format="['jpg', 'png', 'jpeg', 'gif']"
          accept=".jpg, .png, .jpeg, .gif"
          :show-upload-list="false"
        >
          <Button type="info" icon="ios-cloud-upload-outline" size="large">
            点击上传图片
          </Button>
        </Upload>
        <div id="upload-img">
          <img v-show="img !== ''" :src="img" />
        </div>
      </div>
    </div>
    <div class="article-content">
      <div class="tag">
        <Tag color="green" size="large">内容</Tag>
      </div>
      <div class="content">
        <quill-editor
          ref="myTextEditor"
          v-model="inputContent"
          :options="editorOption"
          style="height:15rem;overflow-y: scroll;"
          @change="getInputContent"
        ></quill-editor>
      </div>
    </div>
  </div>
</template>

<script>
// ? import mixins
import content from '@mixins/notice-active/gardenNoticeAddContentMixin'

export default {
  name: 'AddContent',

  components: {},

  mixins: [content],

  data: () => ({}),

  props: {},

  computed: {},

  methods: {}
}
</script>

<style lang="less" scoped>
.full_flex() {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.add-content {
  height: 30rem;
  overflow-y: scroll;
  .title {
    padding-top: 1rem;
    .full_flex();
    .tag {
      flex: 3;
      text-align: right;
      margin-right: 2rem;
    }
    .content {
      flex: 7;
      margin-right: 8rem;
    }
  }
  .introduce {
    padding-top: 1rem;
    .full_flex();
    .tag {
      flex: 3;
      text-align: right;
      margin-right: 2rem;
    }
    .content {
      flex: 7;
      margin-right: 8rem;
    }
  }
  .is-set-top {
    padding-top: 1rem;
    .full_flex();
    .tag {
      flex: 3;
      text-align: right;
      margin-right: 2rem;
    }
    .content {
      flex: 7;
      margin-right: 8rem;
    }
  }
  .upload-image {
    padding-top: 1rem;
    .full_flex();
    .tag {
      flex: 3;
      text-align: right;
      margin-right: 2rem;
    }
    .content {
      flex: 7;
      .full_flex();
      margin-right: 8rem;
      #upload {
        flex: 1;
        text-align: left;
        padding-left: 1rem;
      }
      #upload-img {
        flex: 1;
        img {
          width: 36%;
          height: 36%;
        }
      }
    }
  }
  .article-content {
    padding-top: 1rem;
    .full_flex();
    .tag {
      flex: 3;
      text-align: right;
      margin-right: 2rem;
    }
    .content {
      flex: 7;
      margin-right: 8rem;
    }
  }
}
</style>
