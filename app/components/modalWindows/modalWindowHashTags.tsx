import { useLocale } from "@/app/hooks/useLocale";
import { HashTagType, LocaleType } from "@/app/types/types";
import { HASH_TAGS } from "@/translate/shared/hashTags";
import AddTagsIcon from "@/public/icons/PlusCircle.svg";
import { useEffect, useState } from "react";

export default function ModalWindowHashTags() {
  const locale = useLocale() as LocaleType;

  const [hashTagsData, setHashTagsData] = useState<HashTagType[]>([]);
  const [chosedColorHashTags, setChosedColorHashTags] = useState<string>('');
  const STATUS_ACTIVE_COMPONENT = {
    DEFAULT: 'DEFAULT',
    ADD: 'ADD',
    DELETE: 'DELETE',
  }
  const [statusActiveComponent, setStatusActiveComponent] = useState(STATUS_ACTIVE_COMPONENT.DEFAULT);

  const hashTags = async () => {
    try {
      const response = await fetch('/api/hashTags');
      if (!response.ok) {
        throw new Error('Failed to fetch hash tags');
      }
      const data = await response.json();
      setHashTagsData(data);
      console.log('Fetched hash tags:', data);
    } catch (error) {
      console.error('Error fetching hash tags:', error);
    }
  }
  useEffect(() => {
    hashTags();
  }, [])

  const colorHashTags = ['#FF5733', '#33FF57', '#3357FF', '#F333FF', '#33FFF5', '#F5FF33'];
  const colorHashTagsComponent = () => {
      return (
          <div className={`flex items-center gap-2 bg-primary-color/30 border border-primary-color/40 p-2 rounded-large`}>
              <span className={`text-[12px]`}>{HASH_TAGS[locale].availableHashTags}</span>
              <div className={`flex gap-2`}>
                  {colorHashTags.map((color, index) => (
                      <div key={index} className={`w-6 h-6 rounded-full`} style={{ backgroundColor: color }}></div>
                  ))}
              </div>
          </div>
      )
  }

  const addHashTagComponent = (
      <div className={`flex items-center gap-2 bg-primary-color/30 border border-primary-color/40 p-2 rounded-large`}>
        <div className={`flex flex-col gap-2 w-full`}>
          <input type="text" placeholder={HASH_TAGS[locale].addHashTag} className={`p-2 rounded-small w-full border`} />
          {colorHashTagsComponent()}
          <input type="submit" value="Add" className={`mt-2 p-2 rounded-small w-full bg-green-500 text-white cursor-pointer`} />
        </div>
      </div>
  )
  return (
    <div className={`absolute flex flex-col backdrop-blur-xl  shadow-md  rounded-large  bg-primary-color/10 border border-primary-color/30 p-4 left-2 min-h-30 top-18 w-[400px] z-50`}>
        <h2 className="text-lg font-bold">#{HASH_TAGS[locale].hashTags}</h2>
        {statusActiveComponent === STATUS_ACTIVE_COMPONENT.ADD && addHashTagComponent}
        {statusActiveComponent === STATUS_ACTIVE_COMPONENT.DEFAULT && <div className="flex gap-2 mt-4">
            <div className={`flex items-center gap-2 bg-primary-color/30 border border-primary-color/40 p-2 rounded-large`}>
              <span className={`text-[12px]`}>{HASH_TAGS[locale].availableHashTags}</span>
            </div>          
            <div className={`flex items-center gap-2 bg-primary-color/30 border border-primary-color/40 p-2 rounded-large`}>
              <span className={`text-sm`}>{HASH_TAGS[locale].addHashTag}</span>
                <AddTagsIcon className={`w-6 h-6 cursor-pointer hover:scale-110 transition-transform`} fill={'green'} onClick={() => setStatusActiveComponent(STATUS_ACTIVE_COMPONENT.ADD)} />
                
                    <ul className={`absolute top-full left-0 mt-2 w-full bg-primary-color/20 border border-primary-color/30 rounded-large p-2 z-50`}>
                        {hashTagsData.map((tag: HashTagType) => (
                            <li key={tag.id} className={`p-1 hover:bg-primary-color/30 rounded-small cursor-pointer`}>
                                {tag.title[locale]}
                            </li>
                        ))}
                    </ul>
                
            </div>
            <div className={`flex items-center gap-2 bg-primary-color/30 border border-primary-color/40 p-2 rounded-large`}>
              <span className={`text-sm`}>{HASH_TAGS[locale].deleteHashTag}</span>
            </div>
        </div>}
    </div>
  )
}
