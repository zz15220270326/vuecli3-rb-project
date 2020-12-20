<template>
  <div class="notice-content">
    <div class="title" v-if="dataList.length === 0">
      <h1>{{ title }}</h1>
    </div>
    <div class="content">
      <Card class="content-card" bordered>
        <div slot="title" class="card-title">
          <Checkbox v-model="checkAll" @on-change="handleAllItems">
            {{ selectAllText }}
          </Checkbox>
        </div>
        <CheckboxGroup
          v-model="checkAllGroup"
          class="card-content"
          v-for="(item, key) in dataList"
          :key="key"
          @on-change="selectSingleItem"
        >
          <div class="left">
            <h2>{{ item.title }}</h2>
            <Checkbox
              class="show-content"
              :label="key"
              v-model="item.isChecked"
            >
              {{ item.content }}
            </Checkbox>
            <div class="info">
              <Avatar :src="item.avatar" />
              <span>{{ item.charger }}</span>
              <Tag class="type-tag" :color="item.color">
                {{ item.type }}
              </Tag>
              <Button
                v-if="!item.isDeleted"
                type="error"
                icon="ios-trash-outline"
                @click.native="deleteItem(key)"
              />
            </div>
            <Divider />
          </div>
          <div class="right">
            <div class="operations">
              <Button
                v-for="(item, opKey) in item.operations"
                :key="opKey"
                :type="item.type"
                @click.native="handleOperation(opKey, key)"
              >
                {{ item.tag }}
              </Button>
            </div>
            <div class="time">
              <Tag color="lime">{{ item.time }}</Tag>
            </div>
            <div class="is-read">已读:{{ item.readStatus }}</div>
            <Divider />
          </div>
        </CheckboxGroup>
        <!-- </CheckboxGroup> -->
      </Card>
    </div>
  </div>
</template>

<script>
// ? import mixins
import noticeContentMixin from '@mixins/notice-active/noticeContentMixin'
export default {
  name: 'NoticeContent',

  components: {},

  mixins: [noticeContentMixin],

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
  overflow-y: scroll;
}
.over_to_dot() {
  white-space: nowrap;
  text-overflow: ellipsis; /* for internet explorer */
  overflow: hidden;
  width: 190px;
  display: block;
}

.notice-content {
  .title {
    margin: 1rem 0;
    .common_flex();
  }
  .content {
    .content-card {
      .card-title {
        margin: 0.5rem 1rem;
      }
      .full_content();
      :hover {
        background-color: #f6f6f6;
      }
      .card-content {
        width: 100%;
        height: 8rem;
        margin: 1rem 0;

        .common_flex();
        .left {
          flex: 1;
          .show-content {
            margin: 0.8rem 0;
            // height: 3rem;
            // overflow: scroll;
            .over_to_dot();
          }
          .info {
            margin: 0 1rem;
            .type-tag {
              margin: 0 0.6rem;
            }
          }
        }
        .right {
          flex: 1;
          text-align: right;
          .operations {
            .ivu-btn {
              margin: 0 1rem !important;
              width: 5.4rem !important;
            }
          }
          .time {
            margin: 0.8rem 0;
          }
          .is-read {
            font-weight: 560;
            font-size: 1.2rem;
          }
        }
      }
    }
  }
}
</style>
