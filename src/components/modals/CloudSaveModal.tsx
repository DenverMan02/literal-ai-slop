import React, { useState, useRef } from 'react';
import { PlayerProfile, SaveSlotData } from '../../types/game';
import { StorageService } from '../../services/storage';
import {
  Save,
  Download,
  Upload,
  Copy,
  Check,
  X,
  Trash2,
  HardDrive,
  Clock,
  Sparkles,
  Server,
  User,
} from 'lucide-react';

interface CloudSaveModalProps {
  profile: PlayerProfile;
  isOpen: boolean;
  onClose: () => void;
  onProfileUpdated: (profile: PlayerProfile) => void;
}

export const CloudSaveModal: React.FC<CloudSaveModalProps> = ({
  profile,
  isOpen,
  onClose,
  onProfileUpdated,
}) => {
  const [commanderName, setCommanderName] = useState(profile.name);
  const [saveSlots, setSaveSlots] = useState<SaveSlotData[]>(() => StorageService.getSaveSlots());
  const [importString, setImportString] = useState('');
  const [copied, setCopied] = useState(false);
  const [feedbackMsg, setFeedbackMsg] = useState<{ text: string; type: 'success' | 'error' } | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  if (!isOpen) return null;

  const showFeedback = (text: string, type: 'success' | 'error' = 'success') => {
    setFeedbackMsg({ text, type });
    setTimeout(() => setFeedbackMsg(null), 3000);
  };

  const handleSaveName = () => {
    if (!commanderName.trim()) return;
    const updated = { ...profile, name: commanderName.trim() };
    StorageService.saveProfile(updated);
    onProfileUpdated(updated);
    setSaveSlots(StorageService.getSaveSlots());
    showFeedback('Commander name updated and saved!');
  };

  const handleSaveToSlot = (slotIndex: number) => {
    StorageService.saveToSlot(slotIndex, profile);
    setSaveSlots(StorageService.getSaveSlots());
    showFeedback(`Saved successfully to Slot ${slotIndex}!`);
  };

  const handleLoadFromSlot = (slotIndex: number) => {
    const loaded = StorageService.loadFromSlot(slotIndex);
    if (loaded) {
      onProfileUpdated(loaded);
      setCommanderName(loaded.name);
      setSaveSlots(StorageService.getSaveSlots());
      showFeedback(`Loaded Slot ${slotIndex} (Sector ${(loaded.campaignLevelIndex ?? 0) + 1})!`);
    } else {
      showFeedback('This slot is empty!', 'error');
    }
  };

  const handleDeleteSlot = (slotIndex: number) => {
    StorageService.deleteSlot(slotIndex);
    setSaveSlots(StorageService.getSaveSlots());
    showFeedback(`Slot ${slotIndex} cleared!`);
  };

  const handleCopyExport = () => {
    const code = StorageService.exportSave();
    navigator.clipboard.writeText(code);
    setCopied(true);
    showFeedback('Save code copied to clipboard!');
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownloadFile = () => {
    StorageService.downloadSaveFile();
    showFeedback('Save file downloaded (pvz_tactics_save.json)!');
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      const content = event.target?.result as string;
      if (content) {
        const imported = StorageService.importSave(content.trim());
        if (imported) {
          onProfileUpdated(imported);
          setCommanderName(imported.name);
          setSaveSlots(StorageService.getSaveSlots());
          showFeedback('Save file imported successfully!');
        } else {
          showFeedback('Failed to parse save file. Invalid format.', 'error');
        }
      }
    };
    reader.readAsText(file);
    if (fileInputRef.current) fileInputRef.current.value = '';
  };

  const handleImportText = () => {
    if (!importString.trim()) return;
    const imported = StorageService.importSave(importString.trim());
    if (imported) {
      onProfileUpdated(imported);
      setCommanderName(imported.name);
      setSaveSlots(StorageService.getSaveSlots());
      setImportString('');
      showFeedback('Save code imported successfully!');
    } else {
      showFeedback('Invalid save code data.', 'error');
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/85 backdrop-blur-md flex items-center justify-center p-4 select-none">
      <div className="bg-slate-900 border-2 border-emerald-500/40 rounded-2xl w-full max-w-2xl p-6 shadow-2xl flex flex-col gap-5 max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-slate-800 pb-3">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-emerald-500/20 border border-emerald-400 flex items-center justify-center">
              <HardDrive className="w-4 h-4 text-emerald-400" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-white leading-tight">
                Save System & Game Slots
              </h2>
              <p className="text-[11px] text-slate-400">
                Manage your campaign progress, manual save slots, and backups
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Feedback Alert Banner */}
        {feedbackMsg && (
          <div
            className={`p-2.5 rounded-lg border text-xs font-semibold text-center transition-all ${
              feedbackMsg.type === 'success'
                ? 'bg-emerald-950/70 border-emerald-700 text-emerald-300'
                : 'bg-red-950/70 border-red-700 text-red-300'
            }`}
          >
            {feedbackMsg.text}
          </div>
        )}

        {/* Player Profile Quick Name */}
        <div className="bg-slate-950/70 border border-slate-800 rounded-xl p-3 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-2.5 w-full sm:w-auto">
            <User className="w-4 h-4 text-emerald-400 shrink-0" />
            <div className="min-w-0 flex-1">
              <span className="text-[11px] text-slate-400 block font-semibold">Gardener Name</span>
              <input
                type="text"
                value={commanderName}
                onChange={(e) => setCommanderName(e.target.value)}
                maxLength={20}
                className="bg-slate-900 border border-slate-700 rounded px-2 py-1 text-sm font-bold text-white w-full sm:w-48 focus:border-emerald-500 focus:outline-none"
              />
            </div>
          </div>
          <button
            type="button"
            onClick={handleSaveName}
            className="w-full sm:w-auto px-3 py-1.5 bg-emerald-600 hover:bg-emerald-500 text-white rounded text-xs font-bold transition-all shadow-sm shrink-0"
          >
            Update Name
          </button>
        </div>

        {/* SAVE SLOTS SECTION */}
        <div className="flex flex-col gap-2.5">
          <span className="text-xs font-bold text-slate-300 uppercase tracking-wider flex items-center gap-1.5">
            <Save className="w-3.5 h-3.5 text-emerald-400" />
            Active Game Slots
          </span>

          <div className="grid grid-cols-1 gap-2.5">
            {saveSlots.map((slot) => {
              const isAuto = slot.slot === 0;
              const isEmpty = slot.timestamp === 0;

              return (
                <div
                  key={slot.slot}
                  className={`p-3 rounded-xl border flex flex-col sm:flex-row sm:items-center justify-between gap-3 transition-all ${
                    isAuto
                      ? 'bg-amber-950/20 border-amber-500/40'
                      : isEmpty
                      ? 'bg-slate-950/40 border-slate-800/80 border-dashed'
                      : 'bg-slate-950/80 border-slate-700/80'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-9 h-9 rounded-lg flex items-center justify-center font-mono font-bold text-xs shrink-0 border ${
                        isAuto
                          ? 'bg-amber-500/20 text-amber-300 border-amber-400'
                          : isEmpty
                          ? 'bg-slate-900 text-slate-500 border-slate-800'
                          : 'bg-emerald-500/20 text-emerald-300 border-emerald-400'
                      }`}
                    >
                      {isAuto ? 'AUTO' : `S${slot.slot}`}
                    </div>

                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-bold text-white">
                          {slot.name}
                        </span>
                        {isAuto && (
                          <span className="text-[10px] bg-amber-500/20 text-amber-300 border border-amber-500/40 px-1.5 py-0.2 rounded font-semibold">
                            Auto-Sync
                          </span>
                        )}
                      </div>
                      <div className="text-[11px] text-slate-400 flex items-center gap-2 mt-0.5">
                        <Clock className="w-3 h-3 text-slate-500" />
                        <span>{slot.date}</span>
                        {!isEmpty && (
                          <>
                            <span>·</span>
                            <span className="text-amber-400">{slot.trophies} Trophies</span>
                            <span>·</span>
                            <span className="text-emerald-400">Rank {slot.rank}</span>
                          </>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Slot Action Buttons */}
                  <div className="flex items-center gap-1.5 self-end sm:self-center shrink-0">
                    {!isAuto && (
                      <button
                        type="button"
                        onClick={() => handleSaveToSlot(slot.slot)}
                        title="Overwrite this slot with your current game progress"
                        className="px-2.5 py-1.5 bg-emerald-600 hover:bg-emerald-500 text-white rounded text-xs font-semibold transition-all shadow-sm flex items-center gap-1"
                      >
                        <Save className="w-3 h-3" />
                        <span>Save</span>
                      </button>
                    )}

                    {!isEmpty && (
                      <button
                        type="button"
                        onClick={() => handleLoadFromSlot(slot.slot)}
                        title="Load this save state"
                        className="px-2.5 py-1.5 bg-slate-800 hover:bg-slate-700 border border-slate-600 text-slate-200 hover:text-white rounded text-xs font-semibold transition-all shadow-sm flex items-center gap-1"
                      >
                        <Sparkles className="w-3 h-3 text-amber-400" />
                        <span>Load</span>
                      </button>
                    )}

                    {!isAuto && !isEmpty && (
                      <button
                        type="button"
                        onClick={() => handleDeleteSlot(slot.slot)}
                        title="Clear this slot"
                        className="p-1.5 bg-slate-800 hover:bg-red-950 text-slate-400 hover:text-red-400 rounded border border-slate-700 hover:border-red-500 transition-all"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* BACKUP, FILE TRANSFER & CODE SYNC */}
        <div className="flex flex-col gap-2.5 border-t border-slate-800 pt-3">
          <span className="text-xs font-bold text-slate-300 uppercase tracking-wider flex items-center gap-1.5">
            <Download className="w-3.5 h-3.5 text-amber-400" />
            File Export & Cross-Device Import
          </span>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {/* Download File */}
            <button
              type="button"
              onClick={handleDownloadFile}
              className="p-2.5 rounded-xl bg-slate-950 hover:bg-slate-800 border border-slate-800 hover:border-amber-500/50 flex items-center justify-center gap-2 text-xs font-semibold text-slate-200 transition-all"
            >
              <Download className="w-4 h-4 text-amber-400" />
              <span>Download Save File (.json)</span>
            </button>

            {/* Upload File */}
            <label className="p-2.5 rounded-xl bg-slate-950 hover:bg-slate-800 border border-slate-800 hover:border-emerald-500/50 flex items-center justify-center gap-2 text-xs font-semibold text-slate-200 transition-all cursor-pointer">
              <Upload className="w-4 h-4 text-emerald-400" />
              <span>Upload Save File (.json)</span>
              <input
                ref={fileInputRef}
                type="file"
                accept=".json,application/json"
                onChange={handleFileUpload}
                className="hidden"
              />
            </label>
          </div>

          {/* Quick Copy Code / Paste Code */}
          <div className="flex flex-col sm:flex-row gap-2 mt-1">
            <button
              type="button"
              onClick={handleCopyExport}
              className="px-3 py-2 bg-slate-800 hover:bg-slate-700 border border-slate-700 text-slate-200 rounded-lg text-xs font-semibold flex items-center justify-center gap-1.5 shrink-0 transition-all"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Code Copied' : 'Copy Save Code'}</span>
            </button>

            <div className="flex gap-2 flex-1">
              <input
                type="text"
                placeholder="Paste save code here..."
                value={importString}
                onChange={(e) => setImportString(e.target.value)}
                className="bg-slate-950 border border-slate-800 rounded-lg px-2.5 py-1.5 text-xs text-white placeholder-slate-500 flex-1 focus:border-emerald-500 focus:outline-none"
              />
              <button
                type="button"
                onClick={handleImportText}
                disabled={!importString.trim()}
                className="px-3 py-1.5 bg-emerald-600 hover:bg-emerald-500 disabled:opacity-50 text-white rounded-lg text-xs font-bold transition-all shrink-0"
              >
                Import
              </button>
            </div>
          </div>
        </div>

        {/* Server & Online Status Footer */}
        <div className="bg-slate-950/60 border border-slate-800 rounded-xl p-3 flex items-center justify-between text-xs text-slate-400">
          <div className="flex items-center gap-2">
            <Server className="w-4 h-4 text-emerald-400" />
            <span>Storage Engine: <strong>Local + Indexed State</strong> (Auto-saving active)</span>
          </div>
          <span className="text-[11px] text-emerald-400 font-mono font-bold">● ONLINE READY</span>
        </div>
      </div>
    </div>
  );
};
