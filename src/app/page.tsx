'use client'

import * as sets from '../data/sets.json'

const setType = "expansion"
const setType2 = "core"
const setType3 = "masters"
const setType4 = "draft_innovation"
const setType5 = "masterpiece"
const setType6 = "starter"
const setType7 = "funny"
const setType8 = "from_the_vault"
const skippedSets = [
  "Summer Magic / Edgar",
  "Innistrad: Midnight Hunt",
  "Innistrad: Crimson Vow",
  "Adventures in the Forgotten Realms",
  "Kamigawa: Neon Dynasty",
  "Streets of New Capenna",
  "Dominaria United",
  "The Brothers' War",
  "Phyrexia: All Will Be One",
  "March of the Machine",
  "March of the Machine: The Aftermath",
  "Chronicles Foreign Black Border",
  // "Renaissance",
  // "Rinascimento",
  "Double Masters",
  "Time Spiral Remastered",
  "Double Masters 2022",
  "Commander Legends",
  "Mystery Booster",
  "Mystery Booster Retail Edition Foils",
  "The List",
  "Universes Within",
  "Dominaria Remastered",
  "Commander Masters",
  "Jumpstart",
  "Modern Horizons 1 Timeshifts",
  "Innistrad: Double Feature",
  "Commander Legends: Battle for Baldur's Gate",
  "Jumpstart 2022",
  "The Lord of the Rings: Tales of Middle-earth",
  "Happy Holidays",
  "2016 Heroes of the Realm",
  "HasCon 2017",
  "2017 Heroes of the Realm",
  "2018 Heroes of the Realm",
  "Ponies: The Galloping",
  "Mystery Booster Playtest Cards 2019",
  "2019 Heroes of the Realm",
  "2020 Heroes of the Realm",
  "Mystery Booster Playtest Cards 2021",
  "2021 Heroes of the Realm",
  "Unsanctioned",
  "Unfinity",
  "Unfinity Sticker Sheets",
  "The List (Unfinity Foil Edition)",
  "Transformers",
  "Magic 2015 Clash Pack",
  "Fate Reforged Clash Pack",
  "Magic Origins Clash Pack",
  "From the Vault: Dragons",
  "From the Vault: Exiled",
]
let currentBinder = 0
let setIndexInCurrentBinder = 1
const setData: {
  name: string,
  image: string,
  binder: number,
}[] = []
const binderData: {
  binder: number,
  fontSize: string,
  svgSize: number,
  sets: {
    name: string,
    image: string,
  }[]
}[] = []

const binders = [
  { binder: 1, nrOfSets: 9 }, // Aranbian Nights
  { binder: 2, nrOfSets: 6 }, // Visions
  { binder: 3, nrOfSets: 5 }, // Urza's Legacy
  { binder: 4, nrOfSets: 6 }, // Invasion
  { binder: 5, nrOfSets: 6 }, // Onslaught
  { binder: 6, nrOfSets: 4 }, // Champions of Kamigawa
  { binder: 7, nrOfSets: 4 }, // Guildpact
  { binder: 8, nrOfSets: 6 }, // Time Spiral Timeshifted* == nog aanpassen
  { binder: 9, nrOfSets: 6 }, // Eventide
  { binder: 10, nrOfSets: 6 }, // Rise of the Eldrazi
  { binder: 11, nrOfSets: 5 }, // Avacyn Restored
  { binder: 12, nrOfSets: 4 }, // Born of the Gods
  { binder: 13, nrOfSets: 3 }, // Dragons of Tarkir
  { binder: 14, nrOfSets: 4 }, // Shadows over Innistrad
  { binder: 15, nrOfSets: 4 }, // Amonkhet
  { binder: 16, nrOfSets: 4 }, // Dominaria
  { binder: 17, nrOfSets: 3 }, // Throne of Eldraine
  { binder: 18, nrOfSets: 3 }, // Zendikar Rising
  { binder: 19, nrOfSets: 8 }, // Limited Edition Alpha
  { binder: 20, nrOfSets: 4 }, // Classic Sixth Edition
  { binder: 21, nrOfSets: 3 }, // Tenth Edition
  { binder: 22, nrOfSets: 4 }, // Magic 2012
  { binder: 23, nrOfSets: 4 }, // Magic Origins
  { binder: 24, nrOfSets: 6 }, // Chronicles
  { binder: 25, nrOfSets: 4 }, // Modern Masters 2017
  { binder: 26, nrOfSets: 5 }, // Conspiracy
  { binder: 27, nrOfSets: 20 }, // Zendikar Expeditions
  { binder: 28, nrOfSets: 20 },
]

const getSetData = (type: string) => {
  sets.data.forEach(set => {
    if (skippedSets.find(skippedSet => skippedSet === set.name)) { return }
    if (set.set_type === type && set.digital === false) {
      setData.unshift({
        name: set.name,
        image: set.icon_svg_uri,
        binder: 0
      })
    }
  })
}

// getSetData(setType8)
getSetData(setType7)
getSetData(setType6)
getSetData(setType5)
getSetData(setType4)
getSetData(setType3)
getSetData(setType2)
getSetData(setType)


setData.forEach(set => {
  set.binder = binders[currentBinder].binder
  if (setIndexInCurrentBinder === binders[currentBinder].nrOfSets) {
    // move to new binder
    currentBinder++
    setIndexInCurrentBinder = 1
  } else {
    // increment set counter for current binder
    setIndexInCurrentBinder++
  }
})

binders.forEach(binder => {
  let fontSize = "text-base"
  if (binder.nrOfSets >= 4) { fontSize = "text-sm" }
  if (binder.nrOfSets >= 7) { fontSize = "text-xs" }
  let svgSize = 120
  if (binder.nrOfSets === 2) { svgSize = 90 }
  if (binder.nrOfSets === 3) { svgSize = 75 }
  if (binder.nrOfSets === 4) { svgSize = 54 }
  if (binder.nrOfSets === 5) { svgSize = 40 }
  if (binder.nrOfSets === 6) { svgSize = 30 }
  if (binder.nrOfSets === 7) { svgSize = 28 }
  if (binder.nrOfSets === 8) { svgSize = 21 }
  if (binder.nrOfSets === 9) { svgSize = 20 }
  if (binder.nrOfSets >= 10) { svgSize = 18 }
  if (binder.nrOfSets >= 18) { svgSize = 15 }
  binderData.push({
    binder: binder.binder,
    fontSize: fontSize,
    svgSize: svgSize,
    sets: []
  })
})

setData.forEach(set => {
  binderData[set.binder - 1].sets.push({
    name: set.name,
    image: set.image
  })
})

console.log(sets)

export default function Home() {

  return (
    <>
      <div id="page" className="flex flex-wrap content-start">
        {
          binderData.map((binder) => {
            return (
              <div key={binder.binder} className='flex flex-col p-3 border bg-white w-[60mm] h-[95mm]'>
                <div className='overflow-hidden'>
                  {
                    binder.sets.map((set) => {
                      return (
                        <div key={set.name} className={`${binder.sets.length >= 10 === true && "flex flex-row space-x-2 justify-between"} ${binder.fontSize}`}>
                          <div className={`flex justify-center font-semibold ${binder.sets.length >= 10 === true ? "text-left" : "text-center"} ${binder.fontSize}`}>
                            {`${set.name}`}
                          </div>
                          <div className='flex justify-center'>
                            <svg width={binder.svgSize} height={binder.svgSize}>
                              <image href={set.image} width={binder.svgSize} height={binder.svgSize} />
                            </svg>
                          </div>
                        </div>
                      )
                    })
                  }
                </div>
              </div>
            )
          })}
      </div>
    </>
  )
}
