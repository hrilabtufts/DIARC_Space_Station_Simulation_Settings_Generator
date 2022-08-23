const speakers = {
    'random': 'Random',
    'coqui-tts:en_vctk': 'coqui-tts: vctk [MF] (en-us)',
    'coqui-tts:en_ljspeech': 'coqui-tts: ljspeech [F] (en-us)',
    'espeak:en-029': 'espeak: English_(Caribbean) [M] (en-029)',
    'espeak:en-gb': 'espeak: English_(Great_Britain) [M] (en-gb)',
    'espeak:en-gb-scotland': 'espeak: English_(Scotland) [M] (en-gb-scotland)',
    'espeak:en-gb-x-gbclan': 'espeak: English_(Lancaster) [M] (en-gb-x-gbclan)',
    'espeak:en-gb-x-gbcwmd': 'espeak: English_(West_Midlands) [M] (en-gb-x-gbcwmd)',
    'espeak:en-gb-x-rp': 'espeak: English_(Received_Pronunciation) [M] (en-gb-x-rp)',
    'espeak:en-us': 'espeak: English_(America) [M] (en-us)',
    'festival:cmu_us_slt_arctic_hts': 'festival: cmu_us_slt_arctic_hts [F] (en-us)',
    'festival:en1_mbrola': 'festival: en1_mbrola [M] (en-us)',
    'festival:kal_diphone': 'festival: kal_diphone [M] (en-us)',
    'festival:ked_diphone': 'festival: ked_diphone [M] (en-us)',
    'festival:rab_diphone': 'festival: rab_diphone [M] (en-gb)',
    'festival:us1_mbrola': 'festival: us1_mbrola [F] (en-us)',
    'festival:us2_mbrola': 'festival: us2_mbrola [M] (en-us)',
    'festival:us3_mbrola': 'festival: us3_mbrola [M] (en-us)',
    'flite:cmu_us_aew': 'flite: cmu_us_aew [M] (en-us)',
    'flite:cmu_us_ahw': 'flite: cmu_us_ahw [M] (en-us)',
    'flite:cmu_us_aup': 'flite: cmu_us_aup [M] (en-us)',
    'flite:cmu_us_awb': 'flite: cmu_us_awb [M] (en-us)',
    'flite:cmu_us_axb': 'flite: cmu_us_axb [F] (en-in)',
    'flite:cmu_us_bdl': 'flite: cmu_us_bdl [M] (en-us)',
    'flite:cmu_us_clb': 'flite: cmu_us_clb [F] (en-us)',
    'flite:cmu_us_eey': 'flite: cmu_us_eey [F] (en-us)',
    'flite:cmu_us_fem': 'flite: cmu_us_fem [M] (en-us)',
    'flite:cmu_us_gka': 'flite: cmu_us_gka [M] (en-us)',
    'flite:cmu_us_jmk': 'flite: cmu_us_jmk [M] (en-us)',
    'flite:cmu_us_ksp': 'flite: cmu_us_ksp [M] (en-in)',
    'flite:cmu_us_ljm': 'flite: cmu_us_ljm [F] (en-us)',
    'flite:cmu_us_lnh': 'flite: cmu_us_lnh [F] (en-us)',
    'flite:cmu_us_rms': 'flite: cmu_us_rms [M] (en-us)',
    'flite:cmu_us_rxr': 'flite: cmu_us_rxr [M] (en-us)',
    'flite:cmu_us_slp': 'flite: cmu_us_slp [F] (en-in)',
    'flite:cmu_us_slt': 'flite: cmu_us_slt [F] (en-us)',
    'flite:mycroft_voice_4.0': 'flite: mycroft_voice_4.0 [M] (en-us)',
    'glow-speak:en-us_ljspeech': 'glow-speak: ljspeech [F] (en-us)',
    'glow-speak:en-us_mary_ann': 'glow-speak: mary_ann [F] (en-us)',
    'larynx:blizzard_fls-glow_tts': 'larynx: blizzard_fls-glow_tts [F] (en-us)',
    'larynx:blizzard_lessac-glow_tts': 'larynx: blizzard_lessac-glow_tts [F] (en-us)',
    'larynx:cmu_aew-glow_tts': 'larynx: cmu_aew-glow_tts [M] (en-us)',
    'larynx:cmu_ahw-glow_tts': 'larynx: cmu_ahw-glow_tts [M] (en-us)',
    'larynx:cmu_aup-glow_tts': 'larynx: cmu_aup-glow_tts [M] (en-us)',
    'larynx:cmu_bdl-glow_tts': 'larynx: cmu_bdl-glow_tts [M] (en-us)',
    'larynx:cmu_clb-glow_tts': 'larynx: cmu_clb-glow_tts [F] (en-us)',
    'larynx:cmu_eey-glow_tts': 'larynx: cmu_eey-glow_tts [F] (en-us)',
    'larynx:cmu_fem-glow_tts': 'larynx: cmu_fem-glow_tts [M] (en-us)',
    'larynx:cmu_jmk-glow_tts': 'larynx: cmu_jmk-glow_tts [M] (en-us)',
    'larynx:cmu_ksp-glow_tts': 'larynx: cmu_ksp-glow_tts [F] (en-us)',
    'larynx:cmu_ljm-glow_tts': 'larynx: cmu_ljm-glow_tts [F] (en-us)',
    'larynx:cmu_lnh-glow_tts': 'larynx: cmu_lnh-glow_tts [F] (en-us)',
    'larynx:cmu_rms-glow_tts': 'larynx: cmu_rms-glow_tts [M] (en-us)',
    'larynx:cmu_rxr-glow_tts': 'larynx: cmu_rxr-glow_tts [M] (en-us)',
    'larynx:cmu_slp-glow_tts': 'larynx: cmu_slp-glow_tts [F] (en-us)',
    'larynx:cmu_slt-glow_tts': 'larynx: cmu_slt-glow_tts [F] (en-us)',
    'larynx:ek-glow_tts': 'larynx: ek-glow_tts [F] (en-us)',
    'larynx:glados-glow_tts': 'larynx: glados-glow_tts [F] (en-us)',
    'larynx:harvard-glow_tts': 'larynx: harvard-glow_tts [F] (en-us)',
    'larynx:judy_bieber-glow_tts': 'larynx: judy_bieber-glow_tts [F] (en-us)',
    'larynx:kathleen-glow_tts': 'larynx: kathleen-glow_tts [F] (en-us)',
    'larynx:ljspeech-glow_tts': 'larynx: ljspeech-glow_tts [F] (en-us)',
    'larynx:mary_ann-glow_tts': 'larynx: mary_ann-glow_tts [F] (en-us)',
    'larynx:northern_english_male-glow_tts': 'larynx: northern_english_male-glow_tts [M] (en-us)',
    'larynx:scottish_english_male-glow_tts': 'larynx: scottish_english_male-glow_tts [M] (en-us)',
    'larynx:southern_english_female-glow_tts': 'larynx: southern_english_female-glow_tts [F] (en-us)',
    'larynx:southern_english_male-glow_tts': 'larynx: southern_english_male-glow_tts [M] (en-us)',
    'marytts:cmu-bdl-hsmm': 'marytts: cmu-bdl-hsmm [male] (en_us)',
    'marytts:cmu-rms-hsmm': 'marytts: cmu-rms-hsmm [male] (en_us)',
    'marytts:cmu-slt-hsmm': 'marytts: cmu-slt-hsmm [female] (en_us)',
    'marytts:dfki-obadiah-hsmm': 'marytts: dfki-obadiah-hsmm [male] (en_gb)',
    'marytts:dfki-poppy-hsmm': 'marytts: dfki-poppy-hsmm [female] (en_gb)',
    'marytts:dfki-prudence-hsmm': 'marytts: dfki-prudence-hsmm [female] (en_gb)',
    'marytts:dfki-spike-hsmm': 'marytts: dfki-spike-hsmm [male] (en_gb)',
    'nanotts:en-GB': 'nanotts: en-GB [F] (en-gb)',
    'nanotts:en-US': 'nanotts: en-US [F] (en-us)'
};
const speakerIds = {
    'ED': 'ED (0)',
    'p225': 'p225 (1)',
    'p226': 'p226 (2)',
    'p227': 'p227 (3)',
    'p228': 'p228 (4)',
    'p229': 'p229 (5)',
    'p230': 'p230 (6)',
    'p231': 'p231 (7)',
    'p232': 'p232 (8)',
    'p233': 'p233 (9)',
    'p234': 'p234 (10)',
    'p236': 'p236 (11)',
    'p237': 'p237 (12)',
    'p238': 'p238 (13)',
    'p239': 'p239 (14)',
    'p240': 'p240 (15)',
    'p241': 'p241 (16)',
    'p243': 'p243 (17)',
    'p244': 'p244 (18)',
    'p245': 'p245 (19)',
    'p246': 'p246 (20)',
    'p247': 'p247 (21)',
    'p248': 'p248 (22)',
    'p249': 'p249 (23)',
    'p250': 'p250 (24)',
    'p251': 'p251 (25)',
    'p252': 'p252 (26)',
    'p253': 'p253 (27)',
    'p254': 'p254 (28)',
    'p255': 'p255 (29)',
    'p256': 'p256 (30)',
    'p257': 'p257 (31)',
    'p258': 'p258 (32)',
    'p259': 'p259 (33)',
    'p260': 'p260 (34)',
    'p261': 'p261 (35)',
    'p262': 'p262 (36)',
    'p263': 'p263 (37)',
    'p264': 'p264 (38)',
    'p265': 'p265 (39)',
    'p266': 'p266 (40)',
    'p267': 'p267 (41)',
    'p268': 'p268 (42)',
    'p269': 'p269 (43)',
    'p270': 'p270 (44)',
    'p271': 'p271 (45)',
    'p272': 'p272 (46)',
    'p273': 'p273 (47)',
    'p274': 'p274 (48)',
    'p275': 'p275 (49)',
    'p276': 'p276 (50)',
    'p277': 'p277 (51)',
    'p278': 'p278 (52)',
    'p279': 'p279 (53)',
    'p280': 'p280 (54)',
    'p281': 'p281 (55)',
    'p282': 'p282 (56)',
    'p283': 'p283 (57)',
    'p284': 'p284 (58)',
    'p285': 'p285 (59)',
    'p286': 'p286 (60)',
    'p287': 'p287 (61)',
    'p288': 'p288 (62)',
    'p292': 'p292 (63)',
    'p293': 'p293 (64)',
    'p294': 'p294 (65)',
    'p295': 'p295 (66)',
    'p297': 'p297 (67)',
    'p298': 'p298 (68)',
    'p299': 'p299 (69)',
    'p300': 'p300 (70)',
    'p301': 'p301 (71)',
    'p302': 'p302 (72)',
    'p303': 'p303 (73)',
    'p304': 'p304 (74)',
    'p305': 'p305 (75)',
    'p306': 'p306 (76)',
    'p307': 'p307 (77)',
    'p308': 'p308 (78)',
    'p310': 'p310 (79)',
    'p311': 'p311 (80)',
    'p312': 'p312 (81)',
    'p313': 'p313 (82)',
    'p314': 'p314 (83)',
    'p316': 'p316 (84)',
    'p317': 'p317 (85)',
    'p318': 'p318 (86)',
    'p323': 'p323 (87)',
    'p326': 'p326 (88)',
    'p329': 'p329 (89)',
    'p330': 'p330 (90)',
    'p333': 'p333 (91)',
    'p334': 'p334 (92)',
    'p335': 'p335 (93)',
    'p336': 'p336 (94)',
    'p339': 'p339 (95)',
    'p340': 'p340 (96)',
    'p341': 'p341 (97)',
    'p343': 'p343 (98)',
    'p345': 'p345 (99)',
    'p347': 'p347 (100)',
    'p351': 'p351 (101)',
    'p360': 'p360 (102)',
    'p361': 'p361 (103)',
    'p362': 'p362 (104)',
    'p363': 'p363 (105)',
    'p364': 'p364 (106)',
    'p374': 'p374 (107)',
    'p376': 'p376 (108)'
};
//# sourceMappingURL=speakers.js.map