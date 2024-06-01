import { ref, type Ref } from "vue";
import { showText } from "../../utils/showText";

describe('showText', () => {

  it('should return true after 200 milliseconds', async () => {
    const isTextShowing: Ref<boolean> = ref(false)

    expect(isTextShowing.value).toBe(false);

    await showText(isTextShowing).then(() => {
      expect(isTextShowing.value).toBe(true)
    })
  })

})