// Generated by 'unplugin-auto-import'
export {}
declare global {
  const AppProvider: typeof import('./providers/app')['AppProvider']
  const Button: typeof import('./components/Elements/Button/Button')['Button']
  const ButtonGroup: typeof import('./components/Elements/Button/ButtonGroup')['ButtonGroup']
  const CalculationMethodEnum: typeof import('./features/salah/types/index')['CalculationMethodEnum']
  const Checkbox: typeof import('./components/Elements/Checkbox/checkbox')['Checkbox']
  const Command: typeof import('./components/Command/command')['Command']
  const CommandDialog: typeof import('./components/Command/command')['CommandDialog']
  const CommandEmpty: typeof import('./components/Command/command')['CommandEmpty']
  const CommandGroup: typeof import('./components/Command/command')['CommandGroup']
  const CommandInput: typeof import('./components/Command/command')['CommandInput']
  const CommandItem: typeof import('./components/Command/command')['CommandItem']
  const CommandList: typeof import('./components/Command/command')['CommandList']
  const CommandSeparator: typeof import('./components/Command/command')['CommandSeparator']
  const CommandShortcut: typeof import('./components/Command/command')['CommandShortcut']
  const ConvertSurah: typeof import('./features/surahs/types/index')['ConvertSurah']
  const Dialog: typeof import('./components/Dialog/dialog')['Dialog']
  const DialogContent: typeof import('./components/Dialog/dialog')['DialogContent']
  const DialogDescription: typeof import('./components/Dialog/dialog')['DialogDescription']
  const DialogFooter: typeof import('./components/Dialog/dialog')['DialogFooter']
  const DialogHeader: typeof import('./components/Dialog/dialog')['DialogHeader']
  const DialogTitle: typeof import('./components/Dialog/dialog')['DialogTitle']
  const DialogTrigger: typeof import('./components/Dialog/dialog')['DialogTrigger']
  const EditionType: typeof import('./features/editions/api/helpers')['EditionType']
  const EditionsApi: typeof import('./features/editions/api/index')['EditionsApi']
  const EditionsEnum: typeof import('./utils/bindings')['EditionsEnum']
  const HomePage: typeof import('./screens/homepage')['HomePage']
  const IconButton: typeof import('./components/Elements/Button/IconButton')['IconButton']
  const Input: typeof import('./components/Elements/Input/input')['Input']
  const Label: typeof import('./components/Elements/Label/label')['Label']
  const LanguageName: typeof import('./features/surahs/types/index')['LanguageName']
  const LeftBar: typeof import('./components/Layout/LeftBar')['LeftBar']
  const MadhabMethod: typeof import('./features/salah/types/index')['MadhabMethod']
  const MainContent: typeof import('./components/Layout/MainContent')['default']
  const MushafApi: typeof import('./features/mushaf/api/index')['MushafApi']
  const Navbar: typeof import('./components/Header/Navbar')['Navbar']
  const QuranTextEditionSelector: typeof import('./features/editions/components/quranTextEditionSelect')['QuranTextEditionSelector']
  const ResizeHandler: typeof import('./components/Elements/ResizeHandler/ResizeHandler')['default']
  const RevelationPlace: typeof import('./features/surahs/types/index')['RevelationPlace']
  const RightBar: typeof import('./components/Layout/RightBar')['default']
  const SalahCard: typeof import('./components/Card/card')['SalahCard']
  const Select: typeof import('./components/Elements/Select/select')['Select']
  const SelectContent: typeof import('./components/Elements/Select/select')['SelectContent']
  const SelectGroup: typeof import('./components/Elements/Select/select')['SelectGroup']
  const SelectItem: typeof import('./components/Elements/Select/select')['SelectItem']
  const SelectLabel: typeof import('./components/Elements/Select/select')['SelectLabel']
  const SelectSeparator: typeof import('./components/Elements/Select/select')['SelectSeparator']
  const SelectTrigger: typeof import('./components/Elements/Select/select')['SelectTrigger']
  const SelectValue: typeof import('./components/Elements/Select/select')['SelectValue']
  const Settings: typeof import('./components/Settings/Settings')['Settings']
  const SidebarLink: typeof import('./components/Elements/Text/SidebarLink')['SidebarLink']
  const Spinner: typeof import('./components/Elements/Spinner/Spinner')['Spinner']
  const SurahApi: typeof import('./features/surahs/api/index')['SurahApi']
  const SurahPage: typeof import('./screens/surahpage')['SurahPage']
  const Switch: typeof import('./components/Elements/Switch/switch')['Switch']
  const SwitchIcon: typeof import('./components/Elements/Switch/switch')['SwitchIcon']
  const Tabs: typeof import('./components/Elements/Tabs/tabs')['Tabs']
  const TabsContent: typeof import('./components/Elements/Tabs/tabs')['TabsContent']
  const TabsList: typeof import('./components/Elements/Tabs/tabs')['TabsList']
  const TabsTrigger: typeof import('./components/Elements/Tabs/tabs')['TabsTrigger']
  const TauriApi: typeof import('./features/editions/api/index')['TauriApi']
  const ThemeChange: typeof import('./components/Theme/theme')['ThemeChange']
  const Toggle: typeof import('./components/Elements/Toggle/toggle')['Toggle']
  const Tooltip: typeof import('./components/Elements/Tooltip/tooltip')['Tooltip']
  const TooltipContent: typeof import('./components/Elements/Tooltip/tooltip')['TooltipContent']
  const TooltipProvider: typeof import('./components/Elements/Tooltip/tooltip')['TooltipProvider']
  const TooltipTrigger: typeof import('./components/Elements/Tooltip/tooltip')['TooltipTrigger']
  const afterAll: typeof import('vitest')['afterAll']
  const afterEach: typeof import('vitest')['afterEach']
  const assert: typeof import('vitest')['assert']
  const beforeAll: typeof import('vitest')['beforeAll']
  const beforeEach: typeof import('vitest')['beforeEach']
  const buttonVariants: typeof import('./components/Elements/Button/Button')['buttonVariants']
  const chai: typeof import('vitest')['chai']
  const client: typeof import('./utils/rspc')['client']
  const clsx: typeof import('./utils/classMeger')['clsx']
  const createRef: typeof import('react')['createRef']
  const decodeFromBinary: typeof import('./utils/storeUrlHash')['decodeFromBinary']
  const describe: typeof import('vitest')['describe']
  const encodeToBinary: typeof import('./utils/storeUrlHash')['encodeToBinary']
  const expect: typeof import('vitest')['expect']
  const formatEditionsData: typeof import('./features/editions/api/helpers')['formatEditionsData']
  const forwardRef: typeof import('react')['forwardRef']
  const getEditionType: typeof import('./features/editions/api/helpers')['getEditionType']
  const getLocationInfo: typeof import('./features/salah/api/index')['getLocationInfo']
  const getPrayerTimes: typeof import('./features/salah/api/index')['getPrayerTimes']
  const getQuranTextEditions: typeof import('./stores/quranStore')['getQuranTextEditions']
  const getTranslationEditions: typeof import('./stores/translationsStore')['getTranslationEditions']
  const getTransliterationEditions: typeof import('./stores/transliterationStore')['getTransliterationEditions']
  const hashStorage: typeof import('./utils/storeUrlHash')['hashStorage']
  const it: typeof import('vitest')['it']
  const lazy: typeof import('react')['lazy']
  const memo: typeof import('react')['memo']
  const mushaf: typeof import('./features/mushaf/api/index')['mushaf']
  const startTransition: typeof import('react')['startTransition']
  const suite: typeof import('vitest')['suite']
  const surah: typeof import('./features/surahs/api/index')['surah']
  const surahStore: typeof import('./stores/surahStore')['surahStore']
  const test: typeof import('vitest')['test']
  const toggleVariants: typeof import('./components/Elements/Toggle/toggle')['toggleVariants']
  const useAntdTable: typeof import('ahooks')['useAntdTable']
  const useAsyncEffect: typeof import('ahooks')['useAsyncEffect']
  const useBoolean: typeof import('ahooks')['useBoolean']
  const useCallback: typeof import('react')['useCallback']
  const useClickAway: typeof import('ahooks')['useClickAway']
  const useContext: typeof import('react')['useContext']
  const useControllableValue: typeof import('ahooks')['useControllableValue']
  const useCookieState: typeof import('ahooks')['useCookieState']
  const useCountDown: typeof import('ahooks')['useCountDown']
  const useCounter: typeof import('ahooks')['useCounter']
  const useCreation: typeof import('ahooks')['useCreation']
  const useDebounce: typeof import('ahooks')['useDebounce']
  const useDebounceEffect: typeof import('ahooks')['useDebounceEffect']
  const useDebounceFn: typeof import('ahooks')['useDebounceFn']
  const useDebugValue: typeof import('react')['useDebugValue']
  const useDeepCompareEffect: typeof import('ahooks')['useDeepCompareEffect']
  const useDeepCompareLayoutEffect: typeof import('ahooks')['useDeepCompareLayoutEffect']
  const useDeferredValue: typeof import('react')['useDeferredValue']
  const useDocumentVisibility: typeof import('ahooks')['useDocumentVisibility']
  const useDrag: typeof import('ahooks')['useDrag']
  const useDrop: typeof import('ahooks')['useDrop']
  const useDynamicList: typeof import('ahooks')['useDynamicList']
  const useEffect: typeof import('react')['useEffect']
  const useEventEmitter: typeof import('ahooks')['useEventEmitter']
  const useEventListener: typeof import('ahooks')['useEventListener']
  const useEventTarget: typeof import('ahooks')['useEventTarget']
  const useExternal: typeof import('ahooks')['useExternal']
  const useFavicon: typeof import('ahooks')['useFavicon']
  const useFocusWithin: typeof import('ahooks')['useFocusWithin']
  const useFullscreen: typeof import('ahooks')['useFullscreen']
  const useFusionTable: typeof import('ahooks')['useFusionTable']
  const useGetState: typeof import('ahooks')['useGetState']
  const useHistoryTravel: typeof import('ahooks')['useHistoryTravel']
  const useHover: typeof import('ahooks')['useHover']
  const useId: typeof import('react')['useId']
  const useImperativeHandle: typeof import('react')['useImperativeHandle']
  const useInViewport: typeof import('ahooks')['useInViewport']
  const useInfiniteScroll: typeof import('ahooks')['useInfiniteScroll']
  const useInsertionEffect: typeof import('react')['useInsertionEffect']
  const useInterval: typeof import('ahooks')['useInterval']
  const useIsomorphicLayoutEffect: typeof import('ahooks')['useIsomorphicLayoutEffect']
  const useKeyPress: typeof import('ahooks')['useKeyPress']
  const useLatest: typeof import('ahooks')['useLatest']
  const useLayoutEffect: typeof import('react')['useLayoutEffect']
  const useLocalStorageState: typeof import('ahooks')['useLocalStorageState']
  const useLockFn: typeof import('ahooks')['useLockFn']
  const useLongPress: typeof import('ahooks')['useLongPress']
  const useMap: typeof import('ahooks')['useMap']
  const useMemo: typeof import('react')['useMemo']
  const useMemoizedFn: typeof import('ahooks')['useMemoizedFn']
  const useMount: typeof import('ahooks')['useMount']
  const useMouse: typeof import('ahooks')['useMouse']
  const useMutationObserver: typeof import('ahooks')['useMutationObserver']
  const useNetwork: typeof import('ahooks')['useNetwork']
  const usePagination: typeof import('ahooks')['usePagination']
  const usePrevious: typeof import('ahooks')['usePrevious']
  const useQuranTextFontSettingsStore: typeof import('./stores/quranStore')['useQuranTextFontSettingsStore']
  const useQuranTrackedStore: typeof import('./stores/quranStore')['useQuranTrackedStore']
  const useRafInterval: typeof import('ahooks')['useRafInterval']
  const useRafState: typeof import('ahooks')['useRafState']
  const useRafTimeout: typeof import('ahooks')['useRafTimeout']
  const useReactive: typeof import('ahooks')['useReactive']
  const useRecitationStore: typeof import('./stores/recitationStore')['useRecitationStore']
  const useRecitationTrackedStore: typeof import('./stores/recitationStore')['useRecitationTrackedStore']
  const useReducer: typeof import('react')['useReducer']
  const useRef: typeof import('react')['useRef']
  const useRequest: typeof import('ahooks')['useRequest']
  const useResetState: typeof import('ahooks')['useResetState']
  const useResponsive: typeof import('ahooks')['useResponsive']
  const useSafeState: typeof import('ahooks')['useSafeState']
  const useSalahStore: typeof import('./stores/salahStore')['useSalahStore']
  const useSalahTrackedStore: typeof import('./stores/salahStore')['useSalahTrackedStore']
  const useScroll: typeof import('ahooks')['useScroll']
  const useSelections: typeof import('ahooks')['useSelections']
  const useSessionStorageState: typeof import('ahooks')['useSessionStorageState']
  const useSet: typeof import('ahooks')['useSet']
  const useSetState: typeof import('ahooks')['useSetState']
  const useSidebarStore: typeof import('./stores/sidebarsStore')['useSidebarStore']
  const useSize: typeof import('ahooks')['useSize']
  const useState: typeof import('react')['useState']
  const useSyncExternalStore: typeof import('react')['useSyncExternalStore']
  const useTextSelection: typeof import('ahooks')['useTextSelection']
  const useThrottle: typeof import('ahooks')['useThrottle']
  const useThrottleEffect: typeof import('ahooks')['useThrottleEffect']
  const useThrottleFn: typeof import('ahooks')['useThrottleFn']
  const useTimeout: typeof import('ahooks')['useTimeout']
  const useTitle: typeof import('ahooks')['useTitle']
  const useToggle: typeof import('ahooks')['useToggle']
  const useTrackedEffect: typeof import('ahooks')['useTrackedEffect']
  const useTransition: typeof import('react')['useTransition']
  const useTranslationSettingsStore: typeof import('./stores/translationsStore')['useTranslationSettingsStore']
  const useTranslationTrackedStore: typeof import('./stores/translationsStore')['useTranslationTrackedStore']
  const useTransliterationSettingsStore: typeof import('./stores/transliterationStore')['useTransliterationSettingsStore']
  const useTransliterationTrackedStore: typeof import('./stores/transliterationStore')['useTransliterationTrackedStore']
  const useUnmount: typeof import('ahooks')['useUnmount']
  const useUnmountedRef: typeof import('ahooks')['useUnmountedRef']
  const useUpdate: typeof import('ahooks')['useUpdate']
  const useUpdateEffect: typeof import('ahooks')['useUpdateEffect']
  const useUpdateLayoutEffect: typeof import('ahooks')['useUpdateLayoutEffect']
  const useVirtualList: typeof import('ahooks')['useVirtualList']
  const useWebSocket: typeof import('ahooks')['useWebSocket']
  const useWhyDidYouUpdate: typeof import('ahooks')['useWhyDidYouUpdate']
  const vi: typeof import('vitest')['vi']
  const vitest: typeof import('vitest')['vitest']
}
