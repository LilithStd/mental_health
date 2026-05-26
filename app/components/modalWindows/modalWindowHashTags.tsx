import { useLocale } from "@/app/hooks/useLocale";
import { HashTagType, LocaleType } from "@/app/types/types";
import { HASH_TAGS } from "@/translate/shared/hashTags";
import AddTagsIcon from "@/public/icons/PlusCircle.svg";
import { useEffect, useState } from "react";
import HashTags from "../shared/hashTags";
import { SIZE_ELEMENT } from "@/app/globalConsts/globalEnum";

interface ModalWindowHashTagsProps {
    hashTagsCallBack: (hashTags: HashTagType[]) => void
}

export default function ModalWindowHashTags({ hashTagsCallBack }: ModalWindowHashTagsProps) {
  const locale = useLocale() as LocaleType;

  const [hashTagsData, setHashTagsData] = useState<HashTagType[]>([]);
  const [chosenColorHashTags, setChosenColorHashTags] = useState<string>('');
  const [titleNewHashTag, setTitleNewHashTag] = useState<string>('');
  const [typeNewHashTag, setTypeNewHashTag] = useState<string>('');
  const [choosenHashTags, setChosenHashTags] = useState<HashTagType[]>([]);
  const STATUS_ACTIVE_COMPONENT = {
    DEFAULT: 'DEFAULT',
    ADD: 'ADD',
    DELETE: 'DELETE',
  }
  const [statusActiveComponent, setStatusActiveComponent] = useState(STATUS_ACTIVE_COMPONENT.DEFAULT);

  const addHashTagsHandler = (hashTags: HashTagType) => {

    if(!choosenHashTags.some(tag => tag.id === hashTags.id)) {
        setChosenHashTags((prev) => [...prev, hashTags]);
    }else {
      setChosenHashTags((prev) => prev.filter(tag => tag.id !== hashTags.id));
    }
    
    
  }

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

  const addHashTag = async (type: string, title: string, color: string) => {
    try {
      const response = await fetch('/api/hashTags', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({type, title, color })
      });
      if (!response.ok) {
        throw new Error('Failed to add hash tag');
      }
      const data = await response.json();
      console.log(data);
      // Optionally, you can refresh the hash tags list after adding a new one
      hashTags();
    } catch (error) {
      console.error('Error adding hash tag:', error);
    }
  }

  useEffect(() => {
    hashTags();
  }, [])

  const colorHashTags = ['#FF5733', '#33FF57', '#3357FF', '#F333FF', '#33FFF5', '#F5FF33'];
  const colorHashTagsComponent = () => {
      return (
          <div className={`flex items-center gap-2 bg-primary-color/30 border border-primary-color/40 p-2 rounded-large`}>
              <span className={`text-[12px] w-30`}>{chosenColorHashTags === '' ? HASH_TAGS[locale].availableHashTags : HASH_TAGS[locale].chosenColorHashTag}</span>
              <div className={`flex gap-2`}>
                                  
                     {chosenColorHashTags === '' ? colorHashTags.map((color, index) => (
                      <div key={index} className={`cursor-pointer w-6 h-6 rounded-full`} style={{ backgroundColor: color }} onClick={() => setChosenColorHashTags(color)}></div>

                  )) : <div className={`w-6 h-6 rounded-full`} style={{ backgroundColor: chosenColorHashTags }} onClick={() => setChosenColorHashTags('')}></div>}
                  
              </div>
          </div>
      )
  }
  // console.log(typeNewHashTag, titleNewHashTag, chosenColorHashTags);
  const addHashTagComponent = (
      <div className={`flex  items-center gap-2 bg-primary-color/30 border border-primary-color/40 p-2 rounded-large`}>
        <div className={`flex flex-col gap-2 w-full`}>
          <input type="text" placeholder={HASH_TAGS[locale].addHashTag} className={`p-2 rounded-small w-full border`} value={titleNewHashTag} onChange={(e) => setTitleNewHashTag(e.target.value)} />
          <select value={typeNewHashTag} onChange={(e) => setTypeNewHashTag(e.target.value)} className={`p-2 rounded-small w-full border`}>
            {HASH_TAGS[locale].hashTagTypes.map((type) => (
              <option key={type.value} value={type.value}>{type.label}</option>
            ))}
          </select>
          {colorHashTagsComponent()}
          <div className={`flex gap-2 w-full`}>
            <button type="submit"  className={`mt-2 p-2 w-1/2 rounded-large bg-green-500  cursor-pointer`} onClick={() => addHashTag(typeNewHashTag, titleNewHashTag, chosenColorHashTags)}>
              <span>{HASH_TAGS[locale].createHashTag}</span>
            </button>
            <button className={`mt-1 text-[14px] p-1 w-1/2 rounded-large bg-red-400  cursor-pointer`} onClick={() => setStatusActiveComponent(STATUS_ACTIVE_COMPONENT.DEFAULT)}>
              <span>{HASH_TAGS[locale].cancelAddingHashTag}</span>
            </button>
          </div>
          
        </div>
      </div>
  )
  return (
    <div className={`absolute flex flex-col backdrop-blur-xl  shadow-md  rounded-large  bg-primary-color/10 border border-primary-color/30 p-4 left-2 min-h-30 top-18  z-50`}>
        <div className={`absolute top-2 right-2 p-2 rounded-full bg-primary-color/30 cursor-pointer hover:bg-primary-color/50 transition-colors`} onClick={() => setStatusActiveComponent(STATUS_ACTIVE_COMPONENT.DEFAULT)}>
          <button className={`text-[14px]   cursor-pointer`} onClick={() => setStatusActiveComponent(STATUS_ACTIVE_COMPONENT.DEFAULT)}>
            <span>X</span>
          </button>
        </div>
        <h2 className="text-lg font-bold">#{HASH_TAGS[locale].hashTags}</h2>
        {statusActiveComponent === STATUS_ACTIVE_COMPONENT.ADD && addHashTagComponent}
        {statusActiveComponent === STATUS_ACTIVE_COMPONENT.DEFAULT && <div className="flex gap-2 mt-4">
            <div className={`flex flex-col items-center gap-2 bg-primary-color/30 border border-primary-color/40 p-2 rounded-large`}>
              <span className={`text-[12px]`}>{HASH_TAGS[locale].availableHashTags}</span>
              {hashTagsData.map((tag: HashTagType) => (
                <div key={tag.id} onClick={() => addHashTagsHandler(tag)} className={`cursor-pointer hover:scale-110 w-full justify-center p-1 rounded-large  flex items-center gap-1 ${choosenHashTags.some(chosenTag => chosenTag.id === tag.id) ? 'bg-amber-200' : ''}`}>
                  <HashTags key={tag.id} hashTags={[tag.title[locale]]} type={SIZE_ELEMENT.SMALL} />
                </div>
                
              ))}
              <button className={`mt-1 text-[14px] p-1 rounded-large bg-green-400  cursor-pointer`} onClick={() => hashTagsCallBack(choosenHashTags)}>
                <span>{choosenHashTags.length > 0 ? HASH_TAGS[locale].saveHashTag : HASH_TAGS[locale].addHashTag}</span>
              </button>
            </div>          
            <div className={`flex flex-col  items-center gap-2 bg-primary-color/30 border border-primary-color/40 p-2 rounded-large`}>
             <AddTagsIcon className={`w-6 h-6 cursor-pointer hover:scale-110 transition-transform`} fill={'green'} onClick={() => setStatusActiveComponent(STATUS_ACTIVE_COMPONENT.ADD)} />
              <span className={`text-sm mt-auto`}>{HASH_TAGS[locale].addHashTag}</span>
            </div>
            <div className={`flex flex-col items-center gap-2 bg-primary-color/30 border border-primary-color/40 p-2 rounded-large`}>
              <span className={`text-sm mt-auto`}>{HASH_TAGS[locale].deleteHashTag}</span>
            </div>
        </div>}
    </div>
  )
}
