<template>
  <div class="garden-notice-content">
    <Card class="content-card">
      <div slot="title" class="card-title">
        <Checkbox v-model="checkAll" @on-change="handleAllItems">
          {{ selectAllText }}
        </Checkbox>
      </div>
      <CheckboxGroup
        v-model="checkAllGroup"
        class="card-content"
        v-for="(item, key) in totalList"
        :key="item.title"
        @on-change="selectSingleItem"
      >
        <div class="left">
          <Checkbox
            class="article-content"
            :label="key + 1"
            v-model="item.isChecked"
          />
          <div class="img">
            <img :src="item.imgs" alt="" />
          </div>
          <div class="content">
            <h2>{{ item.title }}</h2>
            <div class="article-content">
              {{ item.content }}
            </div>
            <div class="info">
              <Avatar :src="item.avatar" />
              <span>{{ item.author }}</span>
            </div>
            <div class="op">
              <Button
                v-for="(itm, idx) in item.userOperations"
                :key="idx"
                :type="itm.type"
                :icon="itm.icon"
                @click.native="handleUserOperations(key, itm.tag)"
              >
                {{ itm.tag }}
              </Button>
            </div>
          </div>
        </div>
        <div class="right">
          <div class="operations">
            <Button
              v-for="(itm, idx) in item.itemOperations"
              :key="idx"
              :type="itm.type"
              @click.native="handleItemOperations(key, itm.tag)"
            >
              {{ itm.tag }}
            </Button>
          </div>
        </div>
        <Divider />
      </CheckboxGroup>
    </Card>
  </div>
</template>

<script>
// ? mixins
import contentMixin from '@mixins/notice-active/gardenActiveCardContent'

export default {
  name: 'GardenActiveContent',

  components: {},

  mixins: [contentMixin],

  data: () => ({}),

  props: {},

  computed: {},

  methods: {}
}
</script>

<style lang="less" scoped>
.common_flex() {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.full_content() {
  width: 100%;
  height: 60rem;
}
.over_to_dot() {
  white-space: nowrap;
  text-overflow: ellipsis; /* for internet explorer */
  overflow: hidden;
  width: 190px;
  display: block;
}
.garden-notice-content {
  background-color: #fff;
  .content-card {
    height: 100%;
    width: 100%;
    .card-title {
      margin: 0.8rem 1rem;
      font-size: 1.2rem;
    }
    .card-content {
      .left {
        .common_flex();
        width: 50%;
        margin: 0.8rem 0;
        .img {
          flex: 1;
        }
        .content {
          flex: 2;
          padding-left: 1.6rem;
          .article-content {
            .over_to_dot();
          }
        }
        .ivu-btn {
          margin: 0 0.5rem;
        }
      }
      .right {
        .ivu-btn {
          width: 6rem;
          margin: 0 0.5rem;
        }
      }
    }
  }
}
</style>
