// Generated by RPG Maker.
// Do not edit this file directly.
var $plugins = [
  {
    name: "PluginCommonBase",
    status: true,
    description: "パラメータ解析を提供する共通基盤です",
    parameters: {},
  },
  {
    name: "MakeScreenCapture",
    status: true,
    description: "画面キャプチャ管理プラグイン",
    parameters: {
      PNGキャプチャキー: "F6",
      JPEGキャプチャキー: "F7",
      WEBPキャプチャキー: "F9",
      Ctrl同時押し: "false",
      Alt同時押し: "false",
      ファイル名: "image",
      出力場所: "captures",
      保存形式: "png",
      連番桁数: "2",
      タイムスタンプ: "true",
      署名: "",
      署名サイズ: "22",
      署名画像: "",
      実行間隔: "0",
      効果音: "",
      JPEG品質: "9",
    },
  },
  {
    name: "MakeScreenMovie",
    status: true,
    description: "ゲーム動画作成プラグイン",
    parameters: {
      FunkKeyRecord: "F10",
      RecordSwitchId: "0",
      FileName: "movie_\\d",
      Location: "movies",
      IncludeAudio: "true",
      MovieFileVariableId: "0",
      TestOnly: "true",
      PreventRecordingDisruption: "true",
      MimeType: "自動",
      RefreshRate: "30",
    },
  },
  {
    name: "NRP_GameWindowSize",
    status: true,
    description: "v1.05 ゲーム全体のウィンドウサイズを変更＆オプションに追加",
    parameters: {
      windowWidth: "Graphics.width",
      windowHeight: "Graphics.height",
      screenWidth: "",
      screenHeight: "",
      "<option>": "",
      useOption: "true",
      optionPosition: "2",
      optionName: "ウィンドウサイズ",
      optionDispType: "percent",
      windowSizeMin: "50",
      windowSizeMax: "150",
      windowSizeOffset: "25",
      "<cooperation>": "",
      overWriteSceneManagerRun: "false",
    },
  },
  {
    name: "MessageSkip",
    status: true,
    description: "メッセージスキッププラグイン",
    parameters: {
      スキップキー: "control",
      オートキー: "tab",
      スキップスイッチ: "0",
      オートスイッチ: "0",
      スキップアイコン: "140",
      オートアイコン: "75",
      アイコンX: "0",
      アイコンY: "0",
      押し続けスキップ: "true",
      オート待機フレーム: "100 + textSize * 10",
      終了解除スイッチID: "0",
      スキップピクチャ: "",
      スキップピクチャX: "500",
      スキップピクチャY: "0",
      オートピクチャ: "",
      オートピクチャX: "750",
      オートピクチャY: "0",
      スイッチピクチャ: "",
      スイッチピクチャトリガー: "0",
      スイッチピクチャX: "750",
      スイッチピクチャY: "0",
      ボタン原点: "0",
      ボタン表示スイッチID: "0",
      ピクチャ座標タイプ: "relative",
      無効化スイッチ: "0",
    },
  },
  {
    name: "MessageWindowHidden",
    status: true,
    description: "メッセージウィンドウ一時消去プラグイン",
    parameters: {
      triggerButton: '["右クリック"]',
      triggerSwitch: "0",
      linkPictureNumbers: "[]",
      linkShowPictureNumbers: "[]",
      disableLinkSwitchId: "0",
      disableSwitchId: "0",
      disableInBattle: "false",
      disableInChoice: "true",
      restoreByDecision: "false",
    },
  },
  {
    name: "NRP_MessageWindow",
    status: true,
    description: "v1.02 メッセージウィンドウを調整する。",
    parameters: {
      "<MessageWindow>": "",
      WindowWidth: "Graphics.boxWidth",
      WindowHeight: "this.fittingHeight(3) + 8",
      WindowX: "",
      WindowY: "(this._positionType * (Graphics.boxHeight - this.height)) / 2",
      LineHeight: "",
      AdjustMessageX: "0",
      AdjustMessageY: "0",
      MessageFontSize: "",
      WindowOpacity: "",
      MaskImage: "",
      NoMaskOpacity: "",
      FixIconY: "true",
      "<NameBoxWindow>": "",
      NameBoxAdjustX: "",
      NameBoxAdjustY: "",
      NameBoxFontSize: "",
      NameBoxOpacity: "",
    },
  },
  {
    name: "ParallelBgs",
    status: true,
    description: "BGS並行演奏プラグイン",
    parameters: {},
  },
  {
    name: "AnotherNewGame",
    status: false,
    description: "アナザーニューゲーム追加プラグイン",
    parameters: {
      anotherDataList:
        '["{\\"name\\":\\"回想モード\\",\\"mapId\\":\\"26\\",\\"mapX\\":\\"1\\",\\"mapY\\":\\"1\\",\\"hidden\\":\\"false\\",\\"disable\\":\\"false\\",\\"addPosition\\":\\"0\\",\\"switchId\\":\\"0\\",\\"fileLoad\\":\\"false\\",\\"noFadeout\\":\\"false\\"}"]',
    },
  },
  {
    name: "CustomizeConfigDefault",
    status: true,
    description: "オプションデフォルト値設定プラグイン",
    parameters: {
      AlwaysDash: "false",
      CommandRemember: "false",
      TouchUi: "true",
      BgmVolume: "100",
      BgsVolume: "100",
      MeVolume: "100",
      SeVolume: "100",
      EraseAlwaysDash: "false",
      EraseCommandRemember: "true",
      EraseTouchUi: "true",
      EraseBgmVolume: "false",
      EraseBgsVolume: "false",
      EraseMeVolume: "false",
      EraseSeVolume: "false",
    },
  },
];
