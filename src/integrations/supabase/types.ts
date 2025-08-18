export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "12.2.3 (519615d)"
  }
  public: {
    Tables: {
      _bloqueados_profiles_empresas: {
        Row: {
          A: string
          B: string
        }
        Insert: {
          A: string
          B: string
        }
        Update: {
          A?: string
          B?: string
        }
        Relationships: [
          {
            foreignKeyName: "_bloqueados_profiles_empresas_A_fkey"
            columns: ["A"]
            isOneToOne: false
            referencedRelation: "sis_empresas"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "_bloqueados_profiles_empresas_B_fkey"
            columns: ["B"]
            isOneToOne: false
            referencedRelation: "sis_profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      _prd_segmento: {
        Row: {
          A: string
          B: string
        }
        Insert: {
          A: string
          B: string
        }
        Update: {
          A?: string
          B?: string
        }
        Relationships: [
          {
            foreignKeyName: "_prd_segmento_A_fkey"
            columns: ["A"]
            isOneToOne: false
            referencedRelation: "fis_prd_segmento"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "_prd_segmento_B_fkey"
            columns: ["B"]
            isOneToOne: false
            referencedRelation: "fis_segmentos_empresas"
            referencedColumns: ["id"]
          },
        ]
      }
      _prisma_migrations: {
        Row: {
          applied_steps_count: number
          checksum: string
          finished_at: string | null
          id: string
          logs: string | null
          migration_name: string
          rolled_back_at: string | null
          started_at: string
        }
        Insert: {
          applied_steps_count?: number
          checksum: string
          finished_at?: string | null
          id: string
          logs?: string | null
          migration_name: string
          rolled_back_at?: string | null
          started_at?: string
        }
        Update: {
          applied_steps_count?: number
          checksum?: string
          finished_at?: string | null
          id?: string
          logs?: string | null
          migration_name?: string
          rolled_back_at?: string | null
          started_at?: string
        }
        Relationships: []
      }
      _sis_empresasTosis_profiles: {
        Row: {
          A: string
          B: string
        }
        Insert: {
          A: string
          B: string
        }
        Update: {
          A?: string
          B?: string
        }
        Relationships: [
          {
            foreignKeyName: "_sis_empresasTosis_profiles_A_fkey"
            columns: ["A"]
            isOneToOne: false
            referencedRelation: "sis_empresas"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "_sis_empresasTosis_profiles_B_fkey"
            columns: ["B"]
            isOneToOne: false
            referencedRelation: "sis_profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      adm_consumo_integracao: {
        Row: {
          ds_consumo: number
          ds_tipo_consumo: Database["public"]["Enums"]["TipoConsumoIntegracao"]
          dt_competencia: string
          dt_created: string
          dt_updated: string
          id: string
          id_adm_empresas: string
          id_integracao: string
        }
        Insert: {
          ds_consumo: number
          ds_tipo_consumo: Database["public"]["Enums"]["TipoConsumoIntegracao"]
          dt_competencia: string
          dt_created?: string
          dt_updated: string
          id: string
          id_adm_empresas: string
          id_integracao: string
        }
        Update: {
          ds_consumo?: number
          ds_tipo_consumo?: Database["public"]["Enums"]["TipoConsumoIntegracao"]
          dt_competencia?: string
          dt_created?: string
          dt_updated?: string
          id?: string
          id_adm_empresas?: string
          id_integracao?: string
        }
        Relationships: [
          {
            foreignKeyName: "adm_consumo_integracao_id_adm_empresas_fkey"
            columns: ["id_adm_empresas"]
            isOneToOne: false
            referencedRelation: "adm_empresas"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "adm_consumo_integracao_id_integracao_fkey"
            columns: ["id_integracao"]
            isOneToOne: false
            referencedRelation: "sis_integracao"
            referencedColumns: ["id"]
          },
        ]
      }
      adm_empresas: {
        Row: {
          dt_created: string
          dt_updated: string
          id: string
          id_sis_empresas: string
        }
        Insert: {
          dt_created?: string
          dt_updated: string
          id: string
          id_sis_empresas: string
        }
        Update: {
          dt_created?: string
          dt_updated?: string
          id?: string
          id_sis_empresas?: string
        }
        Relationships: [
          {
            foreignKeyName: "adm_empresas_id_sis_empresas_fkey"
            columns: ["id_sis_empresas"]
            isOneToOne: false
            referencedRelation: "sis_empresas"
            referencedColumns: ["id"]
          },
        ]
      }
      con_empresas: {
        Row: {
          dt_created: string
          dt_updated: string
          id: string
          id_sis_empresas: string
        }
        Insert: {
          dt_created?: string
          dt_updated?: string
          id: string
          id_sis_empresas: string
        }
        Update: {
          dt_created?: string
          dt_updated?: string
          id?: string
          id_sis_empresas?: string
        }
        Relationships: [
          {
            foreignKeyName: "con_empresas_id_sis_empresas_fkey"
            columns: ["id_sis_empresas"]
            isOneToOne: false
            referencedRelation: "sis_empresas"
            referencedColumns: ["id"]
          },
        ]
      }
      con_grupo_contas: {
        Row: {
          ds_classificacao_grupo: string | null
          ds_nome_grupo: string | null
          ds_tipo: string | null
          dt_created: string
          dt_updated: string
          id: string
          id_con_empresas: string | null
          id_tipo_grupo: string | null
          is_ativo: boolean | null
        }
        Insert: {
          ds_classificacao_grupo?: string | null
          ds_nome_grupo?: string | null
          ds_tipo?: string | null
          dt_created?: string
          dt_updated?: string
          id: string
          id_con_empresas?: string | null
          id_tipo_grupo?: string | null
          is_ativo?: boolean | null
        }
        Update: {
          ds_classificacao_grupo?: string | null
          ds_nome_grupo?: string | null
          ds_tipo?: string | null
          dt_created?: string
          dt_updated?: string
          id?: string
          id_con_empresas?: string | null
          id_tipo_grupo?: string | null
          is_ativo?: boolean | null
        }
        Relationships: [
          {
            foreignKeyName: "con_grupo_contas_id_con_empresas_fkey"
            columns: ["id_con_empresas"]
            isOneToOne: false
            referencedRelation: "con_empresas"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "con_grupo_contas_id_tipo_grupo_fkey"
            columns: ["id_tipo_grupo"]
            isOneToOne: false
            referencedRelation: "con_tipo_grupo"
            referencedColumns: ["id"]
          },
        ]
      }
      con_plano_contas: {
        Row: {
          ds_classificacao_cta: string | null
          ds_classificacao_pai: string | null
          ds_nivel_cta: number | null
          ds_nome_cta: string | null
          ds_tipo_cta: string | null
          dt_created: string
          dt_updated: string
          id: string
          id_con_empresas: string | null
          id_conta_pai: string | null
          id_empresa_externo: string | null
          id_externo: string | null
          id_grupo_contas: string | null
          is_ativo: boolean | null
        }
        Insert: {
          ds_classificacao_cta?: string | null
          ds_classificacao_pai?: string | null
          ds_nivel_cta?: number | null
          ds_nome_cta?: string | null
          ds_tipo_cta?: string | null
          dt_created?: string
          dt_updated?: string
          id: string
          id_con_empresas?: string | null
          id_conta_pai?: string | null
          id_empresa_externo?: string | null
          id_externo?: string | null
          id_grupo_contas?: string | null
          is_ativo?: boolean | null
        }
        Update: {
          ds_classificacao_cta?: string | null
          ds_classificacao_pai?: string | null
          ds_nivel_cta?: number | null
          ds_nome_cta?: string | null
          ds_tipo_cta?: string | null
          dt_created?: string
          dt_updated?: string
          id?: string
          id_con_empresas?: string | null
          id_conta_pai?: string | null
          id_empresa_externo?: string | null
          id_externo?: string | null
          id_grupo_contas?: string | null
          is_ativo?: boolean | null
        }
        Relationships: [
          {
            foreignKeyName: "con_plano_contas_id_con_empresas_fkey"
            columns: ["id_con_empresas"]
            isOneToOne: false
            referencedRelation: "con_empresas"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "con_plano_contas_id_conta_pai_fkey"
            columns: ["id_conta_pai"]
            isOneToOne: false
            referencedRelation: "con_plano_contas"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "con_plano_contas_id_grupo_contas_fkey"
            columns: ["id_grupo_contas"]
            isOneToOne: false
            referencedRelation: "con_grupo_contas"
            referencedColumns: ["id"]
          },
        ]
      }
      con_tipo_grupo: {
        Row: {
          ds_nome_tipo: string | null
          dt_created: string
          dt_updated: string
          id: string
          is_ativo: boolean | null
        }
        Insert: {
          ds_nome_tipo?: string | null
          dt_created?: string
          dt_updated?: string
          id: string
          is_ativo?: boolean | null
        }
        Update: {
          ds_nome_tipo?: string | null
          dt_created?: string
          dt_updated?: string
          id?: string
          is_ativo?: boolean | null
        }
        Relationships: []
      }
      emb_classificacao_carrocerias: {
        Row: {
          ds_classificacao: string
          dt_created: string
          dt_updated: string
          id: number
          id_emb_empresas: string
        }
        Insert: {
          ds_classificacao: string
          dt_created?: string
          dt_updated: string
          id?: number
          id_emb_empresas: string
        }
        Update: {
          ds_classificacao?: string
          dt_created?: string
          dt_updated?: string
          id?: number
          id_emb_empresas?: string
        }
        Relationships: [
          {
            foreignKeyName: "emb_classificacao_carrocerias_id_emb_empresas_fkey"
            columns: ["id_emb_empresas"]
            isOneToOne: false
            referencedRelation: "emb_empresas"
            referencedColumns: ["id"]
          },
        ]
      }
      emb_classificacao_implementos: {
        Row: {
          ds_classificacao: string
          dt_created: string
          dt_updated: string
          fl_acrescimo_eixo: boolean | null
          id: number
          id_emb_empresas: string
        }
        Insert: {
          ds_classificacao: string
          dt_created?: string
          dt_updated: string
          fl_acrescimo_eixo?: boolean | null
          id?: number
          id_emb_empresas: string
        }
        Update: {
          ds_classificacao?: string
          dt_created?: string
          dt_updated?: string
          fl_acrescimo_eixo?: boolean | null
          id?: number
          id_emb_empresas?: string
        }
        Relationships: [
          {
            foreignKeyName: "emb_classificacao_implementos_id_emb_empresas_fkey"
            columns: ["id_emb_empresas"]
            isOneToOne: false
            referencedRelation: "emb_empresas"
            referencedColumns: ["id"]
          },
        ]
      }
      emb_classificacao_veiculos: {
        Row: {
          ds_classificacao: string
          dt_created: string
          dt_updated: string
          fl_carroceria_dois_independente: boolean | null
          fl_carroceria_um_independente: boolean | null
          id: number
          id_emb_empresas: string
        }
        Insert: {
          ds_classificacao: string
          dt_created?: string
          dt_updated: string
          fl_carroceria_dois_independente?: boolean | null
          fl_carroceria_um_independente?: boolean | null
          id?: number
          id_emb_empresas: string
        }
        Update: {
          ds_classificacao?: string
          dt_created?: string
          dt_updated?: string
          fl_carroceria_dois_independente?: boolean | null
          fl_carroceria_um_independente?: boolean | null
          id?: number
          id_emb_empresas?: string
        }
        Relationships: [
          {
            foreignKeyName: "emb_classificacao_veiculos_id_emb_empresas_fkey"
            columns: ["id_emb_empresas"]
            isOneToOne: false
            referencedRelation: "emb_empresas"
            referencedColumns: ["id"]
          },
        ]
      }
      emb_empresas: {
        Row: {
          dt_created: string
          dt_updated: string
          id: string
          id_sis_empresas: string
        }
        Insert: {
          dt_created?: string
          dt_updated: string
          id: string
          id_sis_empresas: string
        }
        Update: {
          dt_created?: string
          dt_updated?: string
          id?: string
          id_sis_empresas?: string
        }
        Relationships: [
          {
            foreignKeyName: "emb_empresas_id_sis_empresas_fkey"
            columns: ["id_sis_empresas"]
            isOneToOne: false
            referencedRelation: "sis_empresas"
            referencedColumns: ["id"]
          },
        ]
      }
      emb_estabelecimentos: {
        Row: {
          ds_nome: string
          dt_created: string
          dt_updated: string
          id: string
          id_emb_empresas: string
          id_emb_ibge_cidade: number
        }
        Insert: {
          ds_nome: string
          dt_created?: string
          dt_updated: string
          id: string
          id_emb_empresas: string
          id_emb_ibge_cidade: number
        }
        Update: {
          ds_nome?: string
          dt_created?: string
          dt_updated?: string
          id?: string
          id_emb_empresas?: string
          id_emb_ibge_cidade?: number
        }
        Relationships: [
          {
            foreignKeyName: "emb_estabelecimentos_id_emb_empresas_fkey"
            columns: ["id_emb_empresas"]
            isOneToOne: false
            referencedRelation: "emb_empresas"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "emb_estabelecimentos_id_emb_ibge_cidade_fkey"
            columns: ["id_emb_ibge_cidade"]
            isOneToOne: false
            referencedRelation: "emb_ibge_cidades"
            referencedColumns: ["id"]
          },
        ]
      }
      emb_ibge_cidades: {
        Row: {
          id: number
          id_emb_uf: number
          id_sis_cidade: number
        }
        Insert: {
          id?: number
          id_emb_uf: number
          id_sis_cidade: number
        }
        Update: {
          id?: number
          id_emb_uf?: number
          id_sis_cidade?: number
        }
        Relationships: [
          {
            foreignKeyName: "emb_ibge_cidades_id_emb_uf_fkey"
            columns: ["id_emb_uf"]
            isOneToOne: false
            referencedRelation: "emb_ibge_uf"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "emb_ibge_cidades_id_sis_cidade_fkey"
            columns: ["id_sis_cidade"]
            isOneToOne: false
            referencedRelation: "sis_igbe_city"
            referencedColumns: ["id"]
          },
        ]
      }
      emb_ibge_uf: {
        Row: {
          id: number
          id_sis_ibge_uf: number
        }
        Insert: {
          id?: number
          id_sis_ibge_uf: number
        }
        Update: {
          id?: number
          id_sis_ibge_uf?: number
        }
        Relationships: [
          {
            foreignKeyName: "emb_ibge_uf_id_sis_ibge_uf_fkey"
            columns: ["id_sis_ibge_uf"]
            isOneToOne: false
            referencedRelation: "sis_ibge_uf"
            referencedColumns: ["id"]
          },
        ]
      }
      emb_taxa_juros_ano_modelo: {
        Row: {
          cd_ano: number
          dt_created: string
          dt_updated: string
          vl_taxa_juros: number
        }
        Insert: {
          cd_ano: number
          dt_created?: string
          dt_updated: string
          vl_taxa_juros: number
        }
        Update: {
          cd_ano?: number
          dt_created?: string
          dt_updated?: string
          vl_taxa_juros?: number
        }
        Relationships: []
      }
      emb_transportadoras: {
        Row: {
          cd_transportadora: string
          ds_cnpj: string
          ds_nome_fantasia: string
          ds_razao_social: string
          dt_created: string
          dt_updated: string
          id_emb_empresas: string
          id_emb_ibge_cidade: number
          id_emb_ibge_uf: number
        }
        Insert: {
          cd_transportadora: string
          ds_cnpj: string
          ds_nome_fantasia: string
          ds_razao_social: string
          dt_created?: string
          dt_updated: string
          id_emb_empresas: string
          id_emb_ibge_cidade: number
          id_emb_ibge_uf: number
        }
        Update: {
          cd_transportadora?: string
          ds_cnpj?: string
          ds_nome_fantasia?: string
          ds_razao_social?: string
          dt_created?: string
          dt_updated?: string
          id_emb_empresas?: string
          id_emb_ibge_cidade?: number
          id_emb_ibge_uf?: number
        }
        Relationships: [
          {
            foreignKeyName: "emb_transportadoras_id_emb_empresas_fkey"
            columns: ["id_emb_empresas"]
            isOneToOne: false
            referencedRelation: "emb_empresas"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "emb_transportadoras_id_emb_ibge_cidade_fkey"
            columns: ["id_emb_ibge_cidade"]
            isOneToOne: false
            referencedRelation: "emb_ibge_cidades"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "emb_transportadoras_id_emb_ibge_uf_fkey"
            columns: ["id_emb_ibge_uf"]
            isOneToOne: false
            referencedRelation: "emb_ibge_uf"
            referencedColumns: ["id"]
          },
        ]
      }
      emb_transportadoras_historico: {
        Row: {
          cd_transportadora: string
          dt_created: string
          dt_updated: string
          dt_vigencia: string
          id_regime_tributario: string | null
          sis_regimes_tributariosId: string | null
        }
        Insert: {
          cd_transportadora: string
          dt_created?: string
          dt_updated: string
          dt_vigencia: string
          id_regime_tributario?: string | null
          sis_regimes_tributariosId?: string | null
        }
        Update: {
          cd_transportadora?: string
          dt_created?: string
          dt_updated?: string
          dt_vigencia?: string
          id_regime_tributario?: string | null
          sis_regimes_tributariosId?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "emb_transportadoras_historico_sis_regimes_tributariosId_fkey"
            columns: ["sis_regimes_tributariosId"]
            isOneToOne: false
            referencedRelation: "sis_regimes_tributarios"
            referencedColumns: ["id"]
          },
        ]
      }
      fis_cte: {
        Row: {
          cd_cte: string | null
          cd_ibge: string | null
          cd_mun_env: string | null
          cd_mun_fim: string | null
          cd_mun_ini: string | null
          ds_cfop: string | null
          ds_chave: string
          ds_chave_nfe: string | null
          ds_cst_tributacao: string | null
          ds_documento_destinatario: string | null
          ds_documento_emitente: string | null
          ds_documento_remetente: string | null
          ds_documento_tomador: string | null
          ds_id_cte: string
          ds_ind_ie_toma: number | null
          ds_modal: string | null
          ds_modelo: number | null
          ds_natureza_operacao: string | null
          ds_nome_mun_env: string | null
          ds_nome_mun_fim: string | null
          ds_nome_mun_ini: string | null
          ds_numero: string | null
          ds_razao_social_destinatario: string | null
          ds_razao_social_emitente: string | null
          ds_razao_social_remetente: string | null
          ds_razao_social_tomador: string | null
          ds_retira: number | null
          ds_serie: number | null
          ds_tp_cte: number | null
          ds_tp_serv: number | null
          ds_uf: string | null
          ds_uf_env: string | null
          ds_uf_fim: string | null
          ds_uf_ini: string | null
          dt_created: string
          dt_emissao: string | null
          dt_updated: string
          id: string
          id_fis_empresa_destinatario: string | null
          id_fis_empresa_emitente: string | null
          id_fis_empresa_remetente: string | null
          id_fis_empresa_tomador: string | null
          id_fis_fornecedor: string | null
          vl_base_calculo_icms: string | null
          vl_icms: string | null
          vl_porcentagem_icms: string | null
          vl_rec: string | null
          vl_total: string | null
          vl_total_trib: string
        }
        Insert: {
          cd_cte?: string | null
          cd_ibge?: string | null
          cd_mun_env?: string | null
          cd_mun_fim?: string | null
          cd_mun_ini?: string | null
          ds_cfop?: string | null
          ds_chave: string
          ds_chave_nfe?: string | null
          ds_cst_tributacao?: string | null
          ds_documento_destinatario?: string | null
          ds_documento_emitente?: string | null
          ds_documento_remetente?: string | null
          ds_documento_tomador?: string | null
          ds_id_cte: string
          ds_ind_ie_toma?: number | null
          ds_modal?: string | null
          ds_modelo?: number | null
          ds_natureza_operacao?: string | null
          ds_nome_mun_env?: string | null
          ds_nome_mun_fim?: string | null
          ds_nome_mun_ini?: string | null
          ds_numero?: string | null
          ds_razao_social_destinatario?: string | null
          ds_razao_social_emitente?: string | null
          ds_razao_social_remetente?: string | null
          ds_razao_social_tomador?: string | null
          ds_retira?: number | null
          ds_serie?: number | null
          ds_tp_cte?: number | null
          ds_tp_serv?: number | null
          ds_uf?: string | null
          ds_uf_env?: string | null
          ds_uf_fim?: string | null
          ds_uf_ini?: string | null
          dt_created?: string
          dt_emissao?: string | null
          dt_updated: string
          id: string
          id_fis_empresa_destinatario?: string | null
          id_fis_empresa_emitente?: string | null
          id_fis_empresa_remetente?: string | null
          id_fis_empresa_tomador?: string | null
          id_fis_fornecedor?: string | null
          vl_base_calculo_icms?: string | null
          vl_icms?: string | null
          vl_porcentagem_icms?: string | null
          vl_rec?: string | null
          vl_total?: string | null
          vl_total_trib: string
        }
        Update: {
          cd_cte?: string | null
          cd_ibge?: string | null
          cd_mun_env?: string | null
          cd_mun_fim?: string | null
          cd_mun_ini?: string | null
          ds_cfop?: string | null
          ds_chave?: string
          ds_chave_nfe?: string | null
          ds_cst_tributacao?: string | null
          ds_documento_destinatario?: string | null
          ds_documento_emitente?: string | null
          ds_documento_remetente?: string | null
          ds_documento_tomador?: string | null
          ds_id_cte?: string
          ds_ind_ie_toma?: number | null
          ds_modal?: string | null
          ds_modelo?: number | null
          ds_natureza_operacao?: string | null
          ds_nome_mun_env?: string | null
          ds_nome_mun_fim?: string | null
          ds_nome_mun_ini?: string | null
          ds_numero?: string | null
          ds_razao_social_destinatario?: string | null
          ds_razao_social_emitente?: string | null
          ds_razao_social_remetente?: string | null
          ds_razao_social_tomador?: string | null
          ds_retira?: number | null
          ds_serie?: number | null
          ds_tp_cte?: number | null
          ds_tp_serv?: number | null
          ds_uf?: string | null
          ds_uf_env?: string | null
          ds_uf_fim?: string | null
          ds_uf_ini?: string | null
          dt_created?: string
          dt_emissao?: string | null
          dt_updated?: string
          id?: string
          id_fis_empresa_destinatario?: string | null
          id_fis_empresa_emitente?: string | null
          id_fis_empresa_remetente?: string | null
          id_fis_empresa_tomador?: string | null
          id_fis_fornecedor?: string | null
          vl_base_calculo_icms?: string | null
          vl_icms?: string | null
          vl_porcentagem_icms?: string | null
          vl_rec?: string | null
          vl_total?: string | null
          vl_total_trib?: string
        }
        Relationships: [
          {
            foreignKeyName: "fis_cte_id_fis_empresa_destinatario_fkey"
            columns: ["id_fis_empresa_destinatario"]
            isOneToOne: false
            referencedRelation: "fis_empresas"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "fis_cte_id_fis_empresa_emitente_fkey"
            columns: ["id_fis_empresa_emitente"]
            isOneToOne: false
            referencedRelation: "fis_empresas"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "fis_cte_id_fis_empresa_remetente_fkey"
            columns: ["id_fis_empresa_remetente"]
            isOneToOne: false
            referencedRelation: "fis_empresas"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "fis_cte_id_fis_empresa_tomador_fkey"
            columns: ["id_fis_empresa_tomador"]
            isOneToOne: false
            referencedRelation: "fis_empresas"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "fis_cte_id_fis_fornecedor_fkey"
            columns: ["id_fis_fornecedor"]
            isOneToOne: false
            referencedRelation: "fis_fornecedores"
            referencedColumns: ["id"]
          },
        ]
      }
      fis_cte_carga: {
        Row: {
          ds_tipo_medida: string
          ds_und: string
          id: string
          id_fis_cte: string
          vl_qtd_carregada: string
        }
        Insert: {
          ds_tipo_medida: string
          ds_und: string
          id: string
          id_fis_cte: string
          vl_qtd_carregada: string
        }
        Update: {
          ds_tipo_medida?: string
          ds_und?: string
          id?: string
          id_fis_cte?: string
          vl_qtd_carregada?: string
        }
        Relationships: [
          {
            foreignKeyName: "fis_cte_carga_id_fis_cte_fkey"
            columns: ["id_fis_cte"]
            isOneToOne: false
            referencedRelation: "fis_cte"
            referencedColumns: ["id"]
          },
        ]
      }
      fis_cte_comp_carga: {
        Row: {
          ds_nome: string
          id: string
          id_fis_cte: string
          vl_comp: string
        }
        Insert: {
          ds_nome: string
          id: string
          id_fis_cte: string
          vl_comp: string
        }
        Update: {
          ds_nome?: string
          id?: string
          id_fis_cte?: string
          vl_comp?: string
        }
        Relationships: [
          {
            foreignKeyName: "fis_cte_comp_carga_id_fis_cte_fkey"
            columns: ["id_fis_cte"]
            isOneToOne: false
            referencedRelation: "fis_cte"
            referencedColumns: ["id"]
          },
        ]
      }
      fis_documento: {
        Row: {
          ds_origem: Json | null
          ds_status: Database["public"]["Enums"]["StatusDocumento"] | null
          ds_tipo: Database["public"]["Enums"]["TipoDocumento"] | null
          ds_tipo_ef: Database["public"]["Enums"]["TipoEf"] | null
          dt_created: string
          dt_updated: string
          id: string
          id_cte: string | null
          id_fis_empresas: string
          id_nfe: string | null
          id_nfse: string | null
        }
        Insert: {
          ds_origem?: Json | null
          ds_status?: Database["public"]["Enums"]["StatusDocumento"] | null
          ds_tipo?: Database["public"]["Enums"]["TipoDocumento"] | null
          ds_tipo_ef?: Database["public"]["Enums"]["TipoEf"] | null
          dt_created?: string
          dt_updated?: string
          id: string
          id_cte?: string | null
          id_fis_empresas: string
          id_nfe?: string | null
          id_nfse?: string | null
        }
        Update: {
          ds_origem?: Json | null
          ds_status?: Database["public"]["Enums"]["StatusDocumento"] | null
          ds_tipo?: Database["public"]["Enums"]["TipoDocumento"] | null
          ds_tipo_ef?: Database["public"]["Enums"]["TipoEf"] | null
          dt_created?: string
          dt_updated?: string
          id?: string
          id_cte?: string | null
          id_fis_empresas?: string
          id_nfe?: string | null
          id_nfse?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "fis_documento_id_cte_fkey"
            columns: ["id_cte"]
            isOneToOne: false
            referencedRelation: "fis_cte"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "fis_documento_id_fis_empresas_fkey"
            columns: ["id_fis_empresas"]
            isOneToOne: false
            referencedRelation: "fis_empresas"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "fis_documento_id_nfe_fkey"
            columns: ["id_nfe"]
            isOneToOne: false
            referencedRelation: "fis_nfe"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "fis_documento_id_nfse_fkey"
            columns: ["id_nfse"]
            isOneToOne: false
            referencedRelation: "fis_nfse"
            referencedColumns: ["id"]
          },
        ]
      }
      fis_documento_dfe: {
        Row: {
          ds_documento_destinatario: string | null
          ds_documento_emitente: string | null
          ds_documento_remetente: string | null
          ds_documento_tomador: string | null
          ds_error: string | null
          ds_origem: Database["public"]["Enums"]["OrigemExtracao"] | null
          ds_raw: string
          ds_situacao_integracao:
            | Database["public"]["Enums"]["StatusExtracao"]
            | null
          ds_status: Database["public"]["Enums"]["StatusDocumento"] | null
          ds_tipo: Database["public"]["Enums"]["TipoDocumento"] | null
          ds_tipo_ef: Database["public"]["Enums"]["TipoEf"] | null
          dt_created: string
          dt_emissao: string | null
          dt_updated: string
          id: string
          id_cte: string | null
          id_fis_documento: string | null
          id_fis_empresas: string
          id_nfe: string | null
          id_nfse: string | null
          id_protocolo_raw: string | null
        }
        Insert: {
          ds_documento_destinatario?: string | null
          ds_documento_emitente?: string | null
          ds_documento_remetente?: string | null
          ds_documento_tomador?: string | null
          ds_error?: string | null
          ds_origem?: Database["public"]["Enums"]["OrigemExtracao"] | null
          ds_raw: string
          ds_situacao_integracao?:
            | Database["public"]["Enums"]["StatusExtracao"]
            | null
          ds_status?: Database["public"]["Enums"]["StatusDocumento"] | null
          ds_tipo?: Database["public"]["Enums"]["TipoDocumento"] | null
          ds_tipo_ef?: Database["public"]["Enums"]["TipoEf"] | null
          dt_created?: string
          dt_emissao?: string | null
          dt_updated: string
          id: string
          id_cte?: string | null
          id_fis_documento?: string | null
          id_fis_empresas: string
          id_nfe?: string | null
          id_nfse?: string | null
          id_protocolo_raw?: string | null
        }
        Update: {
          ds_documento_destinatario?: string | null
          ds_documento_emitente?: string | null
          ds_documento_remetente?: string | null
          ds_documento_tomador?: string | null
          ds_error?: string | null
          ds_origem?: Database["public"]["Enums"]["OrigemExtracao"] | null
          ds_raw?: string
          ds_situacao_integracao?:
            | Database["public"]["Enums"]["StatusExtracao"]
            | null
          ds_status?: Database["public"]["Enums"]["StatusDocumento"] | null
          ds_tipo?: Database["public"]["Enums"]["TipoDocumento"] | null
          ds_tipo_ef?: Database["public"]["Enums"]["TipoEf"] | null
          dt_created?: string
          dt_emissao?: string | null
          dt_updated?: string
          id?: string
          id_cte?: string | null
          id_fis_documento?: string | null
          id_fis_empresas?: string
          id_nfe?: string | null
          id_nfse?: string | null
          id_protocolo_raw?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "fis_documento_dfe_id_cte_fkey"
            columns: ["id_cte"]
            isOneToOne: false
            referencedRelation: "fis_cte"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "fis_documento_dfe_id_fis_documento_fkey"
            columns: ["id_fis_documento"]
            isOneToOne: false
            referencedRelation: "fis_documento"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "fis_documento_dfe_id_fis_empresas_fkey"
            columns: ["id_fis_empresas"]
            isOneToOne: false
            referencedRelation: "fis_empresas"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "fis_documento_dfe_id_nfe_fkey"
            columns: ["id_nfe"]
            isOneToOne: false
            referencedRelation: "fis_nfe"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "fis_documento_dfe_id_nfse_fkey"
            columns: ["id_nfse"]
            isOneToOne: false
            referencedRelation: "fis_nfse"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "fis_documento_dfe_id_protocolo_raw_fkey"
            columns: ["id_protocolo_raw"]
            isOneToOne: false
            referencedRelation: "fis_tecnospeed_raw"
            referencedColumns: ["id"]
          },
        ]
      }
      fis_empresas: {
        Row: {
          dt_created: string
          dt_updated: string
          id: string
          id_sis_empresas: string
        }
        Insert: {
          dt_created?: string
          dt_updated?: string
          id: string
          id_sis_empresas: string
        }
        Update: {
          dt_created?: string
          dt_updated?: string
          id?: string
          id_sis_empresas?: string
        }
        Relationships: [
          {
            foreignKeyName: "fis_empresas_id_sis_empresas_fkey"
            columns: ["id_sis_empresas"]
            isOneToOne: false
            referencedRelation: "sis_empresas"
            referencedColumns: ["id"]
          },
        ]
      }
      fis_empresas_tecnospeed: {
        Row: {
          dt_certificado_expiracao: string | null
          dt_consulta_api: string | null
          dt_created: string
          dt_updated: string
          id: string
          id_fis_empresas: string
          id_tecnospeed_certificado: string | null
        }
        Insert: {
          dt_certificado_expiracao?: string | null
          dt_consulta_api?: string | null
          dt_created?: string
          dt_updated: string
          id: string
          id_fis_empresas: string
          id_tecnospeed_certificado?: string | null
        }
        Update: {
          dt_certificado_expiracao?: string | null
          dt_consulta_api?: string | null
          dt_created?: string
          dt_updated?: string
          id?: string
          id_fis_empresas?: string
          id_tecnospeed_certificado?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "fis_empresas_tecnospeed_id_fis_empresas_fkey"
            columns: ["id_fis_empresas"]
            isOneToOne: false
            referencedRelation: "fis_empresas"
            referencedColumns: ["id"]
          },
        ]
      }
      fis_evento: {
        Row: {
          cd_codigo_evento: string | null
          ds_chave_doc: string | null
          ds_descricao_evento: string | null
          ds_evento_id: string
          ds_justificativa_evento: string | null
          ds_protocolo: string | null
          ds_seq_evento: number | null
          ds_status_retorno: string | null
          dt_created: string
          dt_evento: string | null
          dt_updated: string
          id: string
          id_fis_documento: string
        }
        Insert: {
          cd_codigo_evento?: string | null
          ds_chave_doc?: string | null
          ds_descricao_evento?: string | null
          ds_evento_id: string
          ds_justificativa_evento?: string | null
          ds_protocolo?: string | null
          ds_seq_evento?: number | null
          ds_status_retorno?: string | null
          dt_created?: string
          dt_evento?: string | null
          dt_updated?: string
          id: string
          id_fis_documento: string
        }
        Update: {
          cd_codigo_evento?: string | null
          ds_chave_doc?: string | null
          ds_descricao_evento?: string | null
          ds_evento_id?: string
          ds_justificativa_evento?: string | null
          ds_protocolo?: string | null
          ds_seq_evento?: number | null
          ds_status_retorno?: string | null
          dt_created?: string
          dt_evento?: string | null
          dt_updated?: string
          id?: string
          id_fis_documento?: string
        }
        Relationships: [
          {
            foreignKeyName: "fis_evento_id_fis_documento_fkey"
            columns: ["id_fis_documento"]
            isOneToOne: false
            referencedRelation: "fis_documento"
            referencedColumns: ["id"]
          },
        ]
      }
      fis_evento_dfe: {
        Row: {
          cd_codigo_evento: string | null
          ds_chave_doc: string | null
          ds_descricao_evento: string | null
          ds_error: string | null
          ds_evento_id: string | null
          ds_justificativa_evento: string | null
          ds_protocolo: string | null
          ds_raw: string
          ds_seq_evento: number | null
          ds_situacao_integracao:
            | Database["public"]["Enums"]["StatusExtracao"]
            | null
          ds_status_retorno: string | null
          dt_created: string
          dt_evento: string | null
          id: string
          id_evento: string | null
          id_fis_documento_dfe: string | null
        }
        Insert: {
          cd_codigo_evento?: string | null
          ds_chave_doc?: string | null
          ds_descricao_evento?: string | null
          ds_error?: string | null
          ds_evento_id?: string | null
          ds_justificativa_evento?: string | null
          ds_protocolo?: string | null
          ds_raw: string
          ds_seq_evento?: number | null
          ds_situacao_integracao?:
            | Database["public"]["Enums"]["StatusExtracao"]
            | null
          ds_status_retorno?: string | null
          dt_created?: string
          dt_evento?: string | null
          id: string
          id_evento?: string | null
          id_fis_documento_dfe?: string | null
        }
        Update: {
          cd_codigo_evento?: string | null
          ds_chave_doc?: string | null
          ds_descricao_evento?: string | null
          ds_error?: string | null
          ds_evento_id?: string | null
          ds_justificativa_evento?: string | null
          ds_protocolo?: string | null
          ds_raw?: string
          ds_seq_evento?: number | null
          ds_situacao_integracao?:
            | Database["public"]["Enums"]["StatusExtracao"]
            | null
          ds_status_retorno?: string | null
          dt_created?: string
          dt_evento?: string | null
          id?: string
          id_evento?: string | null
          id_fis_documento_dfe?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "fis_evento_dfe_id_evento_fkey"
            columns: ["id_evento"]
            isOneToOne: false
            referencedRelation: "fis_evento"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "fis_evento_dfe_id_fis_documento_dfe_fkey"
            columns: ["id_fis_documento_dfe"]
            isOneToOne: false
            referencedRelation: "fis_documento_dfe"
            referencedColumns: ["id"]
          },
        ]
      }
      fis_fornecedores: {
        Row: {
          ds_bairro: string | null
          ds_cep: string | null
          ds_codigo_municipio: number | null
          ds_codigo_uf: number | null
          ds_complemento: string | null
          ds_documento: string
          ds_email: string | null
          ds_endereco: string | null
          ds_ibge: number | null
          ds_inscricao: string | null
          ds_inscricao_municipal: string | null
          ds_nome: string | null
          ds_status: Database["public"]["Enums"]["StatusFornecedor"] | null
          ds_telefone: string | null
          dt_cadastro: string | null
          dt_created: string
          dt_updated: string
          id: string
          id_empresa_externo: string | null
          id_externo: string | null
          id_fis_empresas: string
        }
        Insert: {
          ds_bairro?: string | null
          ds_cep?: string | null
          ds_codigo_municipio?: number | null
          ds_codigo_uf?: number | null
          ds_complemento?: string | null
          ds_documento: string
          ds_email?: string | null
          ds_endereco?: string | null
          ds_ibge?: number | null
          ds_inscricao?: string | null
          ds_inscricao_municipal?: string | null
          ds_nome?: string | null
          ds_status?: Database["public"]["Enums"]["StatusFornecedor"] | null
          ds_telefone?: string | null
          dt_cadastro?: string | null
          dt_created?: string
          dt_updated: string
          id: string
          id_empresa_externo?: string | null
          id_externo?: string | null
          id_fis_empresas: string
        }
        Update: {
          ds_bairro?: string | null
          ds_cep?: string | null
          ds_codigo_municipio?: number | null
          ds_codigo_uf?: number | null
          ds_complemento?: string | null
          ds_documento?: string
          ds_email?: string | null
          ds_endereco?: string | null
          ds_ibge?: number | null
          ds_inscricao?: string | null
          ds_inscricao_municipal?: string | null
          ds_nome?: string | null
          ds_status?: Database["public"]["Enums"]["StatusFornecedor"] | null
          ds_telefone?: string | null
          dt_cadastro?: string | null
          dt_created?: string
          dt_updated?: string
          id?: string
          id_empresa_externo?: string | null
          id_externo?: string | null
          id_fis_empresas?: string
        }
        Relationships: [
          {
            foreignKeyName: "fis_fornecedores_id_fis_empresas_fkey"
            columns: ["id_fis_empresas"]
            isOneToOne: false
            referencedRelation: "fis_empresas"
            referencedColumns: ["id"]
          },
        ]
      }
      fis_nfe: {
        Row: {
          cd_municipio: string | null
          cd_nf: string | null
          cd_tipo_operacao: string | null
          ds_base_calculo_mono_total: string | null
          ds_chave: string | null
          ds_documento_destinatario: string | null
          ds_documento_emitente: string | null
          ds_fin_nfe: string | null
          ds_id_nfe: string | null
          ds_modelo: string | null
          ds_natureza_operacao: string | null
          ds_numero: string | null
          ds_porcentagem_mono_total: string | null
          ds_razao_social_destinatario: string | null
          ds_razao_social_emitente: string | null
          ds_serie: string | null
          ds_uf: string | null
          dt_created: string
          dt_emissao: string | null
          dt_saida_entrega: string | null
          dt_updated: string
          id: string
          id_fis_empresa_destinatario: string | null
          id_fis_empresa_emitente: string | null
          id_fis_fornecedor: string | null
          js_itens: Json | null
          vl_base_calculo: string | null
          vl_bc: string | null
          vl_cofins: string | null
          vl_desc: string | null
          vl_frete: string | null
          vl_icms: string | null
          vl_icms_desoner: string | null
          vl_ii: string | null
          vl_ipi: string | null
          vl_ipidevol: string | null
          vl_nf: string | null
          vl_outros: string | null
          vl_pis: string | null
          vl_produto: string | null
          vl_seg: string | null
        }
        Insert: {
          cd_municipio?: string | null
          cd_nf?: string | null
          cd_tipo_operacao?: string | null
          ds_base_calculo_mono_total?: string | null
          ds_chave?: string | null
          ds_documento_destinatario?: string | null
          ds_documento_emitente?: string | null
          ds_fin_nfe?: string | null
          ds_id_nfe?: string | null
          ds_modelo?: string | null
          ds_natureza_operacao?: string | null
          ds_numero?: string | null
          ds_porcentagem_mono_total?: string | null
          ds_razao_social_destinatario?: string | null
          ds_razao_social_emitente?: string | null
          ds_serie?: string | null
          ds_uf?: string | null
          dt_created?: string
          dt_emissao?: string | null
          dt_saida_entrega?: string | null
          dt_updated: string
          id: string
          id_fis_empresa_destinatario?: string | null
          id_fis_empresa_emitente?: string | null
          id_fis_fornecedor?: string | null
          js_itens?: Json | null
          vl_base_calculo?: string | null
          vl_bc?: string | null
          vl_cofins?: string | null
          vl_desc?: string | null
          vl_frete?: string | null
          vl_icms?: string | null
          vl_icms_desoner?: string | null
          vl_ii?: string | null
          vl_ipi?: string | null
          vl_ipidevol?: string | null
          vl_nf?: string | null
          vl_outros?: string | null
          vl_pis?: string | null
          vl_produto?: string | null
          vl_seg?: string | null
        }
        Update: {
          cd_municipio?: string | null
          cd_nf?: string | null
          cd_tipo_operacao?: string | null
          ds_base_calculo_mono_total?: string | null
          ds_chave?: string | null
          ds_documento_destinatario?: string | null
          ds_documento_emitente?: string | null
          ds_fin_nfe?: string | null
          ds_id_nfe?: string | null
          ds_modelo?: string | null
          ds_natureza_operacao?: string | null
          ds_numero?: string | null
          ds_porcentagem_mono_total?: string | null
          ds_razao_social_destinatario?: string | null
          ds_razao_social_emitente?: string | null
          ds_serie?: string | null
          ds_uf?: string | null
          dt_created?: string
          dt_emissao?: string | null
          dt_saida_entrega?: string | null
          dt_updated?: string
          id?: string
          id_fis_empresa_destinatario?: string | null
          id_fis_empresa_emitente?: string | null
          id_fis_fornecedor?: string | null
          js_itens?: Json | null
          vl_base_calculo?: string | null
          vl_bc?: string | null
          vl_cofins?: string | null
          vl_desc?: string | null
          vl_frete?: string | null
          vl_icms?: string | null
          vl_icms_desoner?: string | null
          vl_ii?: string | null
          vl_ipi?: string | null
          vl_ipidevol?: string | null
          vl_nf?: string | null
          vl_outros?: string | null
          vl_pis?: string | null
          vl_produto?: string | null
          vl_seg?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "fis_nfe_id_fis_empresa_destinatario_fkey"
            columns: ["id_fis_empresa_destinatario"]
            isOneToOne: false
            referencedRelation: "fis_empresas"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "fis_nfe_id_fis_empresa_emitente_fkey"
            columns: ["id_fis_empresa_emitente"]
            isOneToOne: false
            referencedRelation: "fis_empresas"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "fis_nfe_id_fis_fornecedor_fkey"
            columns: ["id_fis_fornecedor"]
            isOneToOne: false
            referencedRelation: "fis_fornecedores"
            referencedColumns: ["id"]
          },
        ]
      }
      fis_nfe_itens: {
        Row: {
          cd_barras: string | null
          cd_cest: string | null
          cd_cfop: string | null
          cd_cst_cofins: string | null
          cd_cst_pis: string | null
          cd_ncm: string | null
          cd_produto_anp: string | null
          ds_base_calculo_mono: string | null
          ds_codigo: string | null
          ds_cofins_nao_tributavel_cst: string | null
          ds_cst: string | null
          ds_enquadramento_ipi: string | null
          ds_ipi_nao_tributavel_cst: string | null
          ds_ordem: number | null
          ds_pis_nao_tributavel_cst: string | null
          ds_porcentagem_icms: string | null
          ds_porcentagem_mono: string | null
          ds_produto: string | null
          ds_produto_anp_descricao: string | null
          ds_unidade: string | null
          ds_unidade_tributavel: string | null
          dt_created: string
          dt_updated: string
          id: string
          id_fis_nfe: string
          vl_base_calculo_cofins: string | null
          vl_base_calculo_icms: string | null
          vl_base_calculo_pis: string | null
          vl_cofins: string | null
          vl_icms: string | null
          vl_icms_mono: string | null
          vl_pis: string | null
          vl_porcentagem_cofins: string | null
          vl_porcentagem_pis: string | null
          vl_quantidade: string | null
          vl_quantidade_tributavel: string | null
          vl_total: string | null
          vl_total_tributavel: string | null
          vl_unitario: string | null
          vl_unitario_tributavel: string | null
        }
        Insert: {
          cd_barras?: string | null
          cd_cest?: string | null
          cd_cfop?: string | null
          cd_cst_cofins?: string | null
          cd_cst_pis?: string | null
          cd_ncm?: string | null
          cd_produto_anp?: string | null
          ds_base_calculo_mono?: string | null
          ds_codigo?: string | null
          ds_cofins_nao_tributavel_cst?: string | null
          ds_cst?: string | null
          ds_enquadramento_ipi?: string | null
          ds_ipi_nao_tributavel_cst?: string | null
          ds_ordem?: number | null
          ds_pis_nao_tributavel_cst?: string | null
          ds_porcentagem_icms?: string | null
          ds_porcentagem_mono?: string | null
          ds_produto?: string | null
          ds_produto_anp_descricao?: string | null
          ds_unidade?: string | null
          ds_unidade_tributavel?: string | null
          dt_created?: string
          dt_updated: string
          id: string
          id_fis_nfe: string
          vl_base_calculo_cofins?: string | null
          vl_base_calculo_icms?: string | null
          vl_base_calculo_pis?: string | null
          vl_cofins?: string | null
          vl_icms?: string | null
          vl_icms_mono?: string | null
          vl_pis?: string | null
          vl_porcentagem_cofins?: string | null
          vl_porcentagem_pis?: string | null
          vl_quantidade?: string | null
          vl_quantidade_tributavel?: string | null
          vl_total?: string | null
          vl_total_tributavel?: string | null
          vl_unitario?: string | null
          vl_unitario_tributavel?: string | null
        }
        Update: {
          cd_barras?: string | null
          cd_cest?: string | null
          cd_cfop?: string | null
          cd_cst_cofins?: string | null
          cd_cst_pis?: string | null
          cd_ncm?: string | null
          cd_produto_anp?: string | null
          ds_base_calculo_mono?: string | null
          ds_codigo?: string | null
          ds_cofins_nao_tributavel_cst?: string | null
          ds_cst?: string | null
          ds_enquadramento_ipi?: string | null
          ds_ipi_nao_tributavel_cst?: string | null
          ds_ordem?: number | null
          ds_pis_nao_tributavel_cst?: string | null
          ds_porcentagem_icms?: string | null
          ds_porcentagem_mono?: string | null
          ds_produto?: string | null
          ds_produto_anp_descricao?: string | null
          ds_unidade?: string | null
          ds_unidade_tributavel?: string | null
          dt_created?: string
          dt_updated?: string
          id?: string
          id_fis_nfe?: string
          vl_base_calculo_cofins?: string | null
          vl_base_calculo_icms?: string | null
          vl_base_calculo_pis?: string | null
          vl_cofins?: string | null
          vl_icms?: string | null
          vl_icms_mono?: string | null
          vl_pis?: string | null
          vl_porcentagem_cofins?: string | null
          vl_porcentagem_pis?: string | null
          vl_quantidade?: string | null
          vl_quantidade_tributavel?: string | null
          vl_total?: string | null
          vl_total_tributavel?: string | null
          vl_unitario?: string | null
          vl_unitario_tributavel?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "fis_nfe_itens_id_fis_nfe_fkey"
            columns: ["id_fis_nfe"]
            isOneToOne: false
            referencedRelation: "fis_nfe"
            referencedColumns: ["id"]
          },
        ]
      }
      fis_nfe_produto_fornecedor: {
        Row: {
          ds_codigo_produto: string | null
          dt_created: string
          dt_updated: string
          id: string
          id_fis_empresas: string
          id_fis_fornecedor: string
          id_fis_produtos: string
        }
        Insert: {
          ds_codigo_produto?: string | null
          dt_created?: string
          dt_updated: string
          id: string
          id_fis_empresas: string
          id_fis_fornecedor: string
          id_fis_produtos: string
        }
        Update: {
          ds_codigo_produto?: string | null
          dt_created?: string
          dt_updated?: string
          id?: string
          id_fis_empresas?: string
          id_fis_fornecedor?: string
          id_fis_produtos?: string
        }
        Relationships: [
          {
            foreignKeyName: "fis_nfe_produto_fornecedor_id_fis_empresas_fkey"
            columns: ["id_fis_empresas"]
            isOneToOne: false
            referencedRelation: "fis_empresas"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "fis_nfe_produto_fornecedor_id_fis_fornecedor_fkey"
            columns: ["id_fis_fornecedor"]
            isOneToOne: false
            referencedRelation: "fis_fornecedores"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "fis_nfe_produto_fornecedor_id_fis_produtos_fkey"
            columns: ["id_fis_produtos"]
            isOneToOne: false
            referencedRelation: "fis_produtos"
            referencedColumns: ["id"]
          },
        ]
      }
      fis_nfse: {
        Row: {
          ds_aliquota: string | null
          ds_base_calculo: string | null
          ds_codigo_cnae: string | null
          ds_codigo_municipio: string | null
          ds_codigo_tributacao_municipio: string | null
          ds_codigo_verificacao: string | null
          ds_desconto_condicionado: string | null
          ds_desconto_incondicionado: string | null
          ds_discriminacao: string | null
          ds_documento_emitente: string | null
          ds_documento_tomador: string | null
          ds_exigibilidade_iss: string | null
          ds_id_processamento: string | null
          ds_item_lista_servico: string | null
          ds_municipio_incidencia: string | null
          ds_numero: string | null
          ds_orgao_gerador_codigo_municipio: string | null
          ds_orgao_gerador_uf: string | null
          ds_origem: Database["public"]["Enums"]["NfseOrigem"] | null
          ds_outras_retencoes: string | null
          ds_razao_social_emitente: string | null
          ds_razao_social_tomador: string | null
          ds_responsavel_retencao: string | null
          ds_rps_numero: string | null
          ds_rps_serie: string | null
          ds_rps_status: string | null
          ds_rps_tipo: string | null
          ds_valor_cofins: string | null
          ds_valor_credito: string | null
          ds_valor_csll: string | null
          ds_valor_deducoes: string | null
          ds_valor_descontos: string | null
          ds_valor_inss: string | null
          ds_valor_ir: string | null
          ds_valor_iss: string | null
          ds_valor_liquido_nfse: string | null
          ds_valor_pis: string | null
          ds_valor_retencoes: string | null
          ds_valor_servicos: string | null
          dt_competencia: string | null
          dt_created: string
          dt_emissao: string | null
          dt_rps_emissao: string | null
          dt_updated: string
          id: string
          id_fis_empresa_emitente: string | null
          id_fis_empresas: string | null
          id_fis_fornecedor: string | null
          is_incentivo_fiscal: boolean | null
          is_iss_retido: boolean | null
          is_optante_simples_nacional: boolean | null
          js_servicos: Json | null
        }
        Insert: {
          ds_aliquota?: string | null
          ds_base_calculo?: string | null
          ds_codigo_cnae?: string | null
          ds_codigo_municipio?: string | null
          ds_codigo_tributacao_municipio?: string | null
          ds_codigo_verificacao?: string | null
          ds_desconto_condicionado?: string | null
          ds_desconto_incondicionado?: string | null
          ds_discriminacao?: string | null
          ds_documento_emitente?: string | null
          ds_documento_tomador?: string | null
          ds_exigibilidade_iss?: string | null
          ds_id_processamento?: string | null
          ds_item_lista_servico?: string | null
          ds_municipio_incidencia?: string | null
          ds_numero?: string | null
          ds_orgao_gerador_codigo_municipio?: string | null
          ds_orgao_gerador_uf?: string | null
          ds_origem?: Database["public"]["Enums"]["NfseOrigem"] | null
          ds_outras_retencoes?: string | null
          ds_razao_social_emitente?: string | null
          ds_razao_social_tomador?: string | null
          ds_responsavel_retencao?: string | null
          ds_rps_numero?: string | null
          ds_rps_serie?: string | null
          ds_rps_status?: string | null
          ds_rps_tipo?: string | null
          ds_valor_cofins?: string | null
          ds_valor_credito?: string | null
          ds_valor_csll?: string | null
          ds_valor_deducoes?: string | null
          ds_valor_descontos?: string | null
          ds_valor_inss?: string | null
          ds_valor_ir?: string | null
          ds_valor_iss?: string | null
          ds_valor_liquido_nfse?: string | null
          ds_valor_pis?: string | null
          ds_valor_retencoes?: string | null
          ds_valor_servicos?: string | null
          dt_competencia?: string | null
          dt_created?: string
          dt_emissao?: string | null
          dt_rps_emissao?: string | null
          dt_updated: string
          id: string
          id_fis_empresa_emitente?: string | null
          id_fis_empresas?: string | null
          id_fis_fornecedor?: string | null
          is_incentivo_fiscal?: boolean | null
          is_iss_retido?: boolean | null
          is_optante_simples_nacional?: boolean | null
          js_servicos?: Json | null
        }
        Update: {
          ds_aliquota?: string | null
          ds_base_calculo?: string | null
          ds_codigo_cnae?: string | null
          ds_codigo_municipio?: string | null
          ds_codigo_tributacao_municipio?: string | null
          ds_codigo_verificacao?: string | null
          ds_desconto_condicionado?: string | null
          ds_desconto_incondicionado?: string | null
          ds_discriminacao?: string | null
          ds_documento_emitente?: string | null
          ds_documento_tomador?: string | null
          ds_exigibilidade_iss?: string | null
          ds_id_processamento?: string | null
          ds_item_lista_servico?: string | null
          ds_municipio_incidencia?: string | null
          ds_numero?: string | null
          ds_orgao_gerador_codigo_municipio?: string | null
          ds_orgao_gerador_uf?: string | null
          ds_origem?: Database["public"]["Enums"]["NfseOrigem"] | null
          ds_outras_retencoes?: string | null
          ds_razao_social_emitente?: string | null
          ds_razao_social_tomador?: string | null
          ds_responsavel_retencao?: string | null
          ds_rps_numero?: string | null
          ds_rps_serie?: string | null
          ds_rps_status?: string | null
          ds_rps_tipo?: string | null
          ds_valor_cofins?: string | null
          ds_valor_credito?: string | null
          ds_valor_csll?: string | null
          ds_valor_deducoes?: string | null
          ds_valor_descontos?: string | null
          ds_valor_inss?: string | null
          ds_valor_ir?: string | null
          ds_valor_iss?: string | null
          ds_valor_liquido_nfse?: string | null
          ds_valor_pis?: string | null
          ds_valor_retencoes?: string | null
          ds_valor_servicos?: string | null
          dt_competencia?: string | null
          dt_created?: string
          dt_emissao?: string | null
          dt_rps_emissao?: string | null
          dt_updated?: string
          id?: string
          id_fis_empresa_emitente?: string | null
          id_fis_empresas?: string | null
          id_fis_fornecedor?: string | null
          is_incentivo_fiscal?: boolean | null
          is_iss_retido?: boolean | null
          is_optante_simples_nacional?: boolean | null
          js_servicos?: Json | null
        }
        Relationships: [
          {
            foreignKeyName: "fis_nfse_id_fis_empresa_emitente_fkey"
            columns: ["id_fis_empresa_emitente"]
            isOneToOne: false
            referencedRelation: "fis_empresas"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "fis_nfse_id_fis_empresas_fkey"
            columns: ["id_fis_empresas"]
            isOneToOne: false
            referencedRelation: "fis_empresas"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "fis_nfse_id_fis_fornecedor_fkey"
            columns: ["id_fis_fornecedor"]
            isOneToOne: false
            referencedRelation: "fis_fornecedores"
            referencedColumns: ["id"]
          },
        ]
      }
      fis_prd_segmento: {
        Row: {
          ds_descricao: string
          dt_created: string
          dt_updated: string
          id: string
          id_fis_empresas: string | null
          id_sis_tipos_produto: string | null
          id_sis_tipos_servico: string | null
        }
        Insert: {
          ds_descricao: string
          dt_created?: string
          dt_updated?: string
          id: string
          id_fis_empresas?: string | null
          id_sis_tipos_produto?: string | null
          id_sis_tipos_servico?: string | null
        }
        Update: {
          ds_descricao?: string
          dt_created?: string
          dt_updated?: string
          id?: string
          id_fis_empresas?: string | null
          id_sis_tipos_produto?: string | null
          id_sis_tipos_servico?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "fis_prd_segmento_id_fis_empresas_fkey"
            columns: ["id_fis_empresas"]
            isOneToOne: false
            referencedRelation: "fis_empresas"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "fis_prd_segmento_id_sis_tipos_produto_fkey"
            columns: ["id_sis_tipos_produto"]
            isOneToOne: false
            referencedRelation: "sis_tipos_produto"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "fis_prd_segmento_id_sis_tipos_servico_fkey"
            columns: ["id_sis_tipos_servico"]
            isOneToOne: false
            referencedRelation: "sis_tipos_servicos"
            referencedColumns: ["id"]
          },
        ]
      }
      fis_produtos: {
        Row: {
          cd_cest: string | null
          cd_ncm: string | null
          ds_codigo_barras: string | null
          ds_nome: string
          ds_status: Database["public"]["Enums"]["StatusProduto"]
          ds_tipo_item: number | null
          ds_unidade: string
          dt_cadastro: string | null
          dt_created: string
          dt_updated: string
          id: string
          id_empresa_externo: string | null
          id_externo: string | null
          id_fis_empresas: string
          id_sis_tipos_servico: string | null
        }
        Insert: {
          cd_cest?: string | null
          cd_ncm?: string | null
          ds_codigo_barras?: string | null
          ds_nome: string
          ds_status?: Database["public"]["Enums"]["StatusProduto"]
          ds_tipo_item?: number | null
          ds_unidade: string
          dt_cadastro?: string | null
          dt_created?: string
          dt_updated?: string
          id: string
          id_empresa_externo?: string | null
          id_externo?: string | null
          id_fis_empresas: string
          id_sis_tipos_servico?: string | null
        }
        Update: {
          cd_cest?: string | null
          cd_ncm?: string | null
          ds_codigo_barras?: string | null
          ds_nome?: string
          ds_status?: Database["public"]["Enums"]["StatusProduto"]
          ds_tipo_item?: number | null
          ds_unidade?: string
          dt_cadastro?: string | null
          dt_created?: string
          dt_updated?: string
          id?: string
          id_empresa_externo?: string | null
          id_externo?: string | null
          id_fis_empresas?: string
          id_sis_tipos_servico?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "fis_produtos_id_fis_empresas_fkey"
            columns: ["id_fis_empresas"]
            isOneToOne: false
            referencedRelation: "fis_empresas"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "fis_produtos_id_sis_tipos_servico_fkey"
            columns: ["id_sis_tipos_servico"]
            isOneToOne: false
            referencedRelation: "sis_tipos_servicos"
            referencedColumns: ["id"]
          },
        ]
      }
      fis_segmentos_empresas: {
        Row: {
          ds_descricao: string
          dt_created: string
          dt_updated: string
          id: string
          id_fis_empresas: string | null
        }
        Insert: {
          ds_descricao: string
          dt_created?: string
          dt_updated?: string
          id: string
          id_fis_empresas?: string | null
        }
        Update: {
          ds_descricao?: string
          dt_created?: string
          dt_updated?: string
          id?: string
          id_fis_empresas?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "fis_segmentos_empresas_id_fis_empresas_fkey"
            columns: ["id_fis_empresas"]
            isOneToOne: false
            referencedRelation: "fis_empresas"
            referencedColumns: ["id"]
          },
        ]
      }
      fis_tecnospeed_cidade_homologada: {
        Row: {
          ds_ibge_codigo: string
          ds_nome: string
          ds_padrao: string | null
          ds_tipo_comunicacao: string
          fl_consultar_notas_tomada: boolean
          fl_paginar: boolean
          fl_precisa_certificado: boolean
          fl_prestador_obrigatorio: boolean
          fl_requer_login: boolean
          id: string
          is_ativo: boolean
          vl_max_retries: number
          vl_timeout_ms: number
        }
        Insert: {
          ds_ibge_codigo: string
          ds_nome: string
          ds_padrao?: string | null
          ds_tipo_comunicacao: string
          fl_consultar_notas_tomada: boolean
          fl_paginar: boolean
          fl_precisa_certificado: boolean
          fl_prestador_obrigatorio: boolean
          fl_requer_login: boolean
          id: string
          is_ativo?: boolean
          vl_max_retries?: number
          vl_timeout_ms?: number
        }
        Update: {
          ds_ibge_codigo?: string
          ds_nome?: string
          ds_padrao?: string | null
          ds_tipo_comunicacao?: string
          fl_consultar_notas_tomada?: boolean
          fl_paginar?: boolean
          fl_precisa_certificado?: boolean
          fl_prestador_obrigatorio?: boolean
          fl_requer_login?: boolean
          id?: string
          is_ativo?: boolean
          vl_max_retries?: number
          vl_timeout_ms?: number
        }
        Relationships: []
      }
      fis_tecnospeed_process: {
        Row: {
          ds_mensagem_geral: string | null
          ds_status: string
          dt_execucao: string
          id: string
          id_fis_empresas_tecnospeed: string
        }
        Insert: {
          ds_mensagem_geral?: string | null
          ds_status: string
          dt_execucao?: string
          id: string
          id_fis_empresas_tecnospeed: string
        }
        Update: {
          ds_mensagem_geral?: string | null
          ds_status?: string
          dt_execucao?: string
          id?: string
          id_fis_empresas_tecnospeed?: string
        }
        Relationships: [
          {
            foreignKeyName: "fis_tecnospeed_process_id_fis_empresas_tecnospeed_fkey"
            columns: ["id_fis_empresas_tecnospeed"]
            isOneToOne: false
            referencedRelation: "fis_empresas_tecnospeed"
            referencedColumns: ["id"]
          },
        ]
      }
      fis_tecnospeed_raw: {
        Row: {
          dt_fetched: string
          id: string
          id_request: string
          js_raw: Json
          pagina: number
        }
        Insert: {
          dt_fetched?: string
          id: string
          id_request: string
          js_raw: Json
          pagina: number
        }
        Update: {
          dt_fetched?: string
          id?: string
          id_request?: string
          js_raw?: Json
          pagina?: number
        }
        Relationships: [
          {
            foreignKeyName: "fis_tecnospeed_raw_id_request_fkey"
            columns: ["id_request"]
            isOneToOne: false
            referencedRelation: "fis_tecnospeed_request"
            referencedColumns: ["id"]
          },
        ]
      }
      fis_tecnospeed_request: {
        Row: {
          ds_body: string | null
          ds_cidade_ibge: string | null
          ds_erro: string | null
          ds_headers: string | null
          ds_protocolo: string | null
          dt_created: string
          id: string
          id_cidade_homologada: string | null
          id_fis_fornecedor: string | null
          id_process: string
          vl_tentativas: number
        }
        Insert: {
          ds_body?: string | null
          ds_cidade_ibge?: string | null
          ds_erro?: string | null
          ds_headers?: string | null
          ds_protocolo?: string | null
          dt_created?: string
          id: string
          id_cidade_homologada?: string | null
          id_fis_fornecedor?: string | null
          id_process: string
          vl_tentativas?: number
        }
        Update: {
          ds_body?: string | null
          ds_cidade_ibge?: string | null
          ds_erro?: string | null
          ds_headers?: string | null
          ds_protocolo?: string | null
          dt_created?: string
          id?: string
          id_cidade_homologada?: string | null
          id_fis_fornecedor?: string | null
          id_process?: string
          vl_tentativas?: number
        }
        Relationships: [
          {
            foreignKeyName: "fis_tecnospeed_request_id_cidade_homologada_fkey"
            columns: ["id_cidade_homologada"]
            isOneToOne: false
            referencedRelation: "fis_tecnospeed_cidade_homologada"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "fis_tecnospeed_request_id_fis_fornecedor_fkey"
            columns: ["id_fis_fornecedor"]
            isOneToOne: false
            referencedRelation: "fis_fornecedores"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "fis_tecnospeed_request_id_process_fkey"
            columns: ["id_process"]
            isOneToOne: false
            referencedRelation: "fis_tecnospeed_process"
            referencedColumns: ["id"]
          },
        ]
      }
      rh_avaliacao_competencia: {
        Row: {
          created_at: string
          ds_nota: number | null
          dt_updated: string
          id: string
          id_avaliacao: string | null
          id_cargo_nivel_competencia: string | null
        }
        Insert: {
          created_at?: string
          ds_nota?: number | null
          dt_updated?: string
          id: string
          id_avaliacao?: string | null
          id_cargo_nivel_competencia?: string | null
        }
        Update: {
          created_at?: string
          ds_nota?: number | null
          dt_updated?: string
          id?: string
          id_avaliacao?: string | null
          id_cargo_nivel_competencia?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "rh_avaliacao_competencia_id_avaliacao_fkey"
            columns: ["id_avaliacao"]
            isOneToOne: false
            referencedRelation: "rh_avaliacao_funcionario"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "rh_avaliacao_competencia_id_cargo_nivel_competencia_fkey"
            columns: ["id_cargo_nivel_competencia"]
            isOneToOne: false
            referencedRelation: "rh_cargo_nivel_competencia"
            referencedColumns: ["id"]
          },
        ]
      }
      rh_avaliacao_funcionario: {
        Row: {
          created_at: string
          dt_updated: string
          id: string
          id_funcionario: string | null
        }
        Insert: {
          created_at?: string
          dt_updated?: string
          id: string
          id_funcionario?: string | null
        }
        Update: {
          created_at?: string
          dt_updated?: string
          id?: string
          id_funcionario?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "rh_avaliacao_funcionario_id_funcionario_fkey"
            columns: ["id_funcionario"]
            isOneToOne: false
            referencedRelation: "rh_funcionarios"
            referencedColumns: ["id"]
          },
        ]
      }
      rh_cargo_nivel_competencia: {
        Row: {
          created_at: string
          dt_updated: string
          id: string
          id_cargo_nivel_senioridade: string | null
          id_competencia: string | null
          id_rh_empresas: string | null
          is_ativo: boolean | null
        }
        Insert: {
          created_at?: string
          dt_updated?: string
          id: string
          id_cargo_nivel_senioridade?: string | null
          id_competencia?: string | null
          id_rh_empresas?: string | null
          is_ativo?: boolean | null
        }
        Update: {
          created_at?: string
          dt_updated?: string
          id?: string
          id_cargo_nivel_senioridade?: string | null
          id_competencia?: string | null
          id_rh_empresas?: string | null
          is_ativo?: boolean | null
        }
        Relationships: [
          {
            foreignKeyName: "rh_cargo_nivel_competencia_id_cargo_nivel_senioridade_fkey"
            columns: ["id_cargo_nivel_senioridade"]
            isOneToOne: false
            referencedRelation: "rh_cargo_nivel_senioridade"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "rh_cargo_nivel_competencia_id_competencia_fkey"
            columns: ["id_competencia"]
            isOneToOne: false
            referencedRelation: "rh_competencias"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "rh_cargo_nivel_competencia_id_rh_empresas_fkey"
            columns: ["id_rh_empresas"]
            isOneToOne: false
            referencedRelation: "rh_empresas"
            referencedColumns: ["id"]
          },
        ]
      }
      rh_cargo_nivel_senioridade: {
        Row: {
          cd_ordem_senioridade: number | null
          created_at: string
          ds_salario_max: number | null
          ds_salario_min: number | null
          dt_updated: string
          id: string
          id_cargo: string | null
          id_nivel: string | null
          id_rh_empresas: string | null
          id_senioridade: string | null
        }
        Insert: {
          cd_ordem_senioridade?: number | null
          created_at?: string
          ds_salario_max?: number | null
          ds_salario_min?: number | null
          dt_updated?: string
          id: string
          id_cargo?: string | null
          id_nivel?: string | null
          id_rh_empresas?: string | null
          id_senioridade?: string | null
        }
        Update: {
          cd_ordem_senioridade?: number | null
          created_at?: string
          ds_salario_max?: number | null
          ds_salario_min?: number | null
          dt_updated?: string
          id?: string
          id_cargo?: string | null
          id_nivel?: string | null
          id_rh_empresas?: string | null
          id_senioridade?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "rh_cargo_nivel_senioridade_id_cargo_fkey"
            columns: ["id_cargo"]
            isOneToOne: false
            referencedRelation: "rh_cargos"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "rh_cargo_nivel_senioridade_id_nivel_fkey"
            columns: ["id_nivel"]
            isOneToOne: false
            referencedRelation: "rh_niveis"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "rh_cargo_nivel_senioridade_id_rh_empresas_fkey"
            columns: ["id_rh_empresas"]
            isOneToOne: false
            referencedRelation: "rh_empresas"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "rh_cargo_nivel_senioridade_id_senioridade_fkey"
            columns: ["id_senioridade"]
            isOneToOne: false
            referencedRelation: "rh_senioridade"
            referencedColumns: ["id"]
          },
        ]
      }
      rh_cargo_nivel_senioridade_vigencia: {
        Row: {
          created_at: string
          ds_salario_max: number | null
          ds_salario_min: number | null
          dt_fim: string | null
          dt_updated: string
          id: string
          id_cargo_nivel_senioridade: string | null
        }
        Insert: {
          created_at?: string
          ds_salario_max?: number | null
          ds_salario_min?: number | null
          dt_fim?: string | null
          dt_updated?: string
          id: string
          id_cargo_nivel_senioridade?: string | null
        }
        Update: {
          created_at?: string
          ds_salario_max?: number | null
          ds_salario_min?: number | null
          dt_fim?: string | null
          dt_updated?: string
          id?: string
          id_cargo_nivel_senioridade?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "rh_cargo_nivel_senioridade_vigencia_id_cargo_nivel_seniori_fkey"
            columns: ["id_cargo_nivel_senioridade"]
            isOneToOne: false
            referencedRelation: "rh_cargo_nivel_senioridade"
            referencedColumns: ["id"]
          },
        ]
      }
      rh_cargos: {
        Row: {
          created_at: string
          ds_nome: string | null
          ds_nome_empresa: string | null
          dt_inativacao: string | null
          dt_updated: string
          id: string
          id_empresa_externo: string | null
          id_externo: string | null
          id_rh_empresas: string | null
          is_ativo: boolean | null
          is_gerencia_supervisao: boolean | null
        }
        Insert: {
          created_at?: string
          ds_nome?: string | null
          ds_nome_empresa?: string | null
          dt_inativacao?: string | null
          dt_updated?: string
          id: string
          id_empresa_externo?: string | null
          id_externo?: string | null
          id_rh_empresas?: string | null
          is_ativo?: boolean | null
          is_gerencia_supervisao?: boolean | null
        }
        Update: {
          created_at?: string
          ds_nome?: string | null
          ds_nome_empresa?: string | null
          dt_inativacao?: string | null
          dt_updated?: string
          id?: string
          id_empresa_externo?: string | null
          id_externo?: string | null
          id_rh_empresas?: string | null
          is_ativo?: boolean | null
          is_gerencia_supervisao?: boolean | null
        }
        Relationships: [
          {
            foreignKeyName: "rh_cargos_id_rh_empresas_fkey"
            columns: ["id_rh_empresas"]
            isOneToOne: false
            referencedRelation: "rh_empresas"
            referencedColumns: ["id"]
          },
        ]
      }
      rh_centro_custos: {
        Row: {
          cd_centro_custos_sintetico: number | null
          created_at: string
          ds_mascara: string | null
          ds_nome: string | null
          ds_nome_empresa: string | null
          ds_tipo: Database["public"]["Enums"]["TipoCentroCustos"] | null
          dt_updated: string
          id: string
          id_empresa_externo: string | null
          id_externo: string | null
          id_rh_empresas: string | null
        }
        Insert: {
          cd_centro_custos_sintetico?: number | null
          created_at?: string
          ds_mascara?: string | null
          ds_nome?: string | null
          ds_nome_empresa?: string | null
          ds_tipo?: Database["public"]["Enums"]["TipoCentroCustos"] | null
          dt_updated?: string
          id: string
          id_empresa_externo?: string | null
          id_externo?: string | null
          id_rh_empresas?: string | null
        }
        Update: {
          cd_centro_custos_sintetico?: number | null
          created_at?: string
          ds_mascara?: string | null
          ds_nome?: string | null
          ds_nome_empresa?: string | null
          ds_tipo?: Database["public"]["Enums"]["TipoCentroCustos"] | null
          dt_updated?: string
          id?: string
          id_empresa_externo?: string | null
          id_externo?: string | null
          id_rh_empresas?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "rh_centro_custos_id_rh_empresas_fkey"
            columns: ["id_rh_empresas"]
            isOneToOne: false
            referencedRelation: "rh_empresas"
            referencedColumns: ["id"]
          },
        ]
      }
      rh_competencias: {
        Row: {
          created_at: string
          ds_descricao: string | null
          ds_nome: string | null
          dt_inativacao: string | null
          dt_updated: string
          id: string
          is_ativo: boolean | null
        }
        Insert: {
          created_at?: string
          ds_descricao?: string | null
          ds_nome?: string | null
          dt_inativacao?: string | null
          dt_updated?: string
          id: string
          is_ativo?: boolean | null
        }
        Update: {
          created_at?: string
          ds_descricao?: string | null
          ds_nome?: string | null
          dt_inativacao?: string | null
          dt_updated?: string
          id?: string
          is_ativo?: boolean | null
        }
        Relationships: []
      }
      rh_departamento: {
        Row: {
          cd_cep: string | null
          created_at: string
          ds_bairro: string | null
          ds_cidade: string | null
          ds_endereco: string | null
          ds_estado: string | null
          ds_nome: string | null
          ds_nome_empresa: string | null
          ds_numero: number | null
          dt_updated: string
          id: string
          id_empresa_externo: string | null
          id_externo: string | null
          id_rh_empresas: string | null
        }
        Insert: {
          cd_cep?: string | null
          created_at?: string
          ds_bairro?: string | null
          ds_cidade?: string | null
          ds_endereco?: string | null
          ds_estado?: string | null
          ds_nome?: string | null
          ds_nome_empresa?: string | null
          ds_numero?: number | null
          dt_updated?: string
          id: string
          id_empresa_externo?: string | null
          id_externo?: string | null
          id_rh_empresas?: string | null
        }
        Update: {
          cd_cep?: string | null
          created_at?: string
          ds_bairro?: string | null
          ds_cidade?: string | null
          ds_endereco?: string | null
          ds_estado?: string | null
          ds_nome?: string | null
          ds_nome_empresa?: string | null
          ds_numero?: number | null
          dt_updated?: string
          id?: string
          id_empresa_externo?: string | null
          id_externo?: string | null
          id_rh_empresas?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "rh_departamento_id_rh_empresas_fkey"
            columns: ["id_rh_empresas"]
            isOneToOne: false
            referencedRelation: "rh_empresas"
            referencedColumns: ["id"]
          },
        ]
      }
      rh_empresas: {
        Row: {
          created_at: string
          id: string
          id_sis_empresas: string
          updated_at: string
        }
        Insert: {
          created_at?: string
          id: string
          id_sis_empresas: string
          updated_at?: string
        }
        Update: {
          created_at?: string
          id?: string
          id_sis_empresas?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "rh_empresas_id_sis_empresas_fkey"
            columns: ["id_sis_empresas"]
            isOneToOne: false
            referencedRelation: "sis_empresas"
            referencedColumns: ["id"]
          },
        ]
      }
      rh_funcionarios: {
        Row: {
          cd_situacao: string | null
          created_at: string
          ds_categoria: string | null
          ds_data_nascimento: string | null
          ds_documento: string | null
          ds_horas_dia: number | null
          ds_horas_mes: number | null
          ds_horas_semana: number | null
          ds_jornada_descricao: string | null
          ds_nome: string
          ds_nome_empresa_externo: string | null
          ds_salario: number | null
          ds_sexo: string | null
          ds_situacao: string | null
          ds_venc_ferias: string | null
          dt_admissao: string | null
          dt_updated: string
          id: string
          id_cargo: string | null
          id_cargo_nivel_senioridade: string | null
          id_centro_custos: string | null
          id_departamento: string | null
          id_empresa_externo: string | null
          id_externo: string | null
          id_rh_empresas: string | null
        }
        Insert: {
          cd_situacao?: string | null
          created_at?: string
          ds_categoria?: string | null
          ds_data_nascimento?: string | null
          ds_documento?: string | null
          ds_horas_dia?: number | null
          ds_horas_mes?: number | null
          ds_horas_semana?: number | null
          ds_jornada_descricao?: string | null
          ds_nome: string
          ds_nome_empresa_externo?: string | null
          ds_salario?: number | null
          ds_sexo?: string | null
          ds_situacao?: string | null
          ds_venc_ferias?: string | null
          dt_admissao?: string | null
          dt_updated?: string
          id: string
          id_cargo?: string | null
          id_cargo_nivel_senioridade?: string | null
          id_centro_custos?: string | null
          id_departamento?: string | null
          id_empresa_externo?: string | null
          id_externo?: string | null
          id_rh_empresas?: string | null
        }
        Update: {
          cd_situacao?: string | null
          created_at?: string
          ds_categoria?: string | null
          ds_data_nascimento?: string | null
          ds_documento?: string | null
          ds_horas_dia?: number | null
          ds_horas_mes?: number | null
          ds_horas_semana?: number | null
          ds_jornada_descricao?: string | null
          ds_nome?: string
          ds_nome_empresa_externo?: string | null
          ds_salario?: number | null
          ds_sexo?: string | null
          ds_situacao?: string | null
          ds_venc_ferias?: string | null
          dt_admissao?: string | null
          dt_updated?: string
          id?: string
          id_cargo?: string | null
          id_cargo_nivel_senioridade?: string | null
          id_centro_custos?: string | null
          id_departamento?: string | null
          id_empresa_externo?: string | null
          id_externo?: string | null
          id_rh_empresas?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "rh_funcionarios_id_cargo_fkey"
            columns: ["id_cargo"]
            isOneToOne: false
            referencedRelation: "rh_cargos"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "rh_funcionarios_id_cargo_nivel_senioridade_fkey"
            columns: ["id_cargo_nivel_senioridade"]
            isOneToOne: false
            referencedRelation: "rh_cargo_nivel_senioridade"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "rh_funcionarios_id_centro_custos_fkey"
            columns: ["id_centro_custos"]
            isOneToOne: false
            referencedRelation: "rh_centro_custos"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "rh_funcionarios_id_departamento_fkey"
            columns: ["id_departamento"]
            isOneToOne: false
            referencedRelation: "rh_departamento"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "rh_funcionarios_id_rh_empresas_fkey"
            columns: ["id_rh_empresas"]
            isOneToOne: false
            referencedRelation: "rh_empresas"
            referencedColumns: ["id"]
          },
        ]
      }
      rh_niveis: {
        Row: {
          created_at: string
          ds_nome: string | null
          dt_inativacao: string | null
          dt_updated: string
          id: string
          id_rh_empresas: string | null
          is_ativo: boolean | null
        }
        Insert: {
          created_at?: string
          ds_nome?: string | null
          dt_inativacao?: string | null
          dt_updated?: string
          id: string
          id_rh_empresas?: string | null
          is_ativo?: boolean | null
        }
        Update: {
          created_at?: string
          ds_nome?: string | null
          dt_inativacao?: string | null
          dt_updated?: string
          id?: string
          id_rh_empresas?: string | null
          is_ativo?: boolean | null
        }
        Relationships: [
          {
            foreignKeyName: "rh_niveis_id_rh_empresas_fkey"
            columns: ["id_rh_empresas"]
            isOneToOne: false
            referencedRelation: "rh_empresas"
            referencedColumns: ["id"]
          },
        ]
      }
      rh_nivel_cargo: {
        Row: {
          cd_ordem: number | null
          created_at: string
          dt_updated: string
          id: string
          id_cargo: string | null
          id_nivel: string | null
        }
        Insert: {
          cd_ordem?: number | null
          created_at?: string
          dt_updated?: string
          id: string
          id_cargo?: string | null
          id_nivel?: string | null
        }
        Update: {
          cd_ordem?: number | null
          created_at?: string
          dt_updated?: string
          id?: string
          id_cargo?: string | null
          id_nivel?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "rh_nivel_cargo_id_cargo_fkey"
            columns: ["id_cargo"]
            isOneToOne: false
            referencedRelation: "rh_cargos"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "rh_nivel_cargo_id_nivel_fkey"
            columns: ["id_nivel"]
            isOneToOne: false
            referencedRelation: "rh_niveis"
            referencedColumns: ["id"]
          },
        ]
      }
      rh_senioridade: {
        Row: {
          created_at: string
          ds_nome: string | null
          dt_inativacao: string | null
          dt_updated: string
          id: string
          id_rh_empresas: string | null
          is_ativo: boolean | null
        }
        Insert: {
          created_at?: string
          ds_nome?: string | null
          dt_inativacao?: string | null
          dt_updated?: string
          id: string
          id_rh_empresas?: string | null
          is_ativo?: boolean | null
        }
        Update: {
          created_at?: string
          ds_nome?: string | null
          dt_inativacao?: string | null
          dt_updated?: string
          id?: string
          id_rh_empresas?: string | null
          is_ativo?: boolean | null
        }
        Relationships: [
          {
            foreignKeyName: "rh_senioridade_id_rh_empresas_fkey"
            columns: ["id_rh_empresas"]
            isOneToOne: false
            referencedRelation: "rh_empresas"
            referencedColumns: ["id"]
          },
        ]
      }
      rh_senioridade_cargo: {
        Row: {
          cd_ordem: number | null
          created_at: string
          dt_updated: string
          id: string
          id_cargo: string | null
          id_senioridade: string | null
        }
        Insert: {
          cd_ordem?: number | null
          created_at?: string
          dt_updated?: string
          id: string
          id_cargo?: string | null
          id_senioridade?: string | null
        }
        Update: {
          cd_ordem?: number | null
          created_at?: string
          dt_updated?: string
          id?: string
          id_cargo?: string | null
          id_senioridade?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "rh_senioridade_cargo_id_cargo_fkey"
            columns: ["id_cargo"]
            isOneToOne: false
            referencedRelation: "rh_cargos"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "rh_senioridade_cargo_id_senioridade_fkey"
            columns: ["id_senioridade"]
            isOneToOne: false
            referencedRelation: "rh_senioridade"
            referencedColumns: ["id"]
          },
        ]
      }
      sis_access: {
        Row: {
          dt_created: string
          dt_updated: string
          id: string
          id_empresas: string | null
          id_profiles: string | null
          js_modules: Database["public"]["Enums"]["ModuleType"][] | null
        }
        Insert: {
          dt_created?: string
          dt_updated?: string
          id: string
          id_empresas?: string | null
          id_profiles?: string | null
          js_modules?: Database["public"]["Enums"]["ModuleType"][] | null
        }
        Update: {
          dt_created?: string
          dt_updated?: string
          id?: string
          id_empresas?: string | null
          id_profiles?: string | null
          js_modules?: Database["public"]["Enums"]["ModuleType"][] | null
        }
        Relationships: [
          {
            foreignKeyName: "sis_access_id_empresas_fkey"
            columns: ["id_empresas"]
            isOneToOne: false
            referencedRelation: "sis_empresas"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "sis_access_id_profiles_fkey"
            columns: ["id_profiles"]
            isOneToOne: false
            referencedRelation: "sis_profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      sis_certificados: {
        Row: {
          ds_arquivo: string
          ds_nome: string
          ds_nome_arquivo: string
          ds_pfx: string
          ds_senha: string
          dt_created: string
          dt_expiracao: string
          dt_updated: string
          id: string
          id_empresa: string | null
          id_usuario: string
        }
        Insert: {
          ds_arquivo: string
          ds_nome: string
          ds_nome_arquivo: string
          ds_pfx: string
          ds_senha: string
          dt_created?: string
          dt_expiracao: string
          dt_updated?: string
          id: string
          id_empresa?: string | null
          id_usuario: string
        }
        Update: {
          ds_arquivo?: string
          ds_nome?: string
          ds_nome_arquivo?: string
          ds_pfx?: string
          ds_senha?: string
          dt_created?: string
          dt_expiracao?: string
          dt_updated?: string
          id?: string
          id_empresa?: string | null
          id_usuario?: string
        }
        Relationships: [
          {
            foreignKeyName: "sis_certificados_id_empresa_fkey"
            columns: ["id_empresa"]
            isOneToOne: false
            referencedRelation: "sis_empresas"
            referencedColumns: ["id"]
          },
        ]
      }
      sis_cfop: {
        Row: {
          ds_codigo: string | null
          ds_descricao: string
          dt_created: string
          dt_updated: string
          id: string
        }
        Insert: {
          ds_codigo?: string | null
          ds_descricao: string
          dt_created?: string
          dt_updated?: string
          id: string
        }
        Update: {
          ds_codigo?: string | null
          ds_descricao?: string
          dt_created?: string
          dt_updated?: string
          id?: string
        }
        Relationships: []
      }
      sis_cst: {
        Row: {
          ds_codigo: string | null
          ds_descricao: string
          dt_created: string
          dt_updated: string
          id: string
        }
        Insert: {
          ds_codigo?: string | null
          ds_descricao: string
          dt_created?: string
          dt_updated?: string
          id: string
        }
        Update: {
          ds_codigo?: string | null
          ds_descricao?: string
          dt_created?: string
          dt_updated?: string
          id?: string
        }
        Relationships: []
      }
      sis_emb_marcas_carrocerias: {
        Row: {
          cd_marca: number
          ds_nome: string
          id: number
        }
        Insert: {
          cd_marca: number
          ds_nome: string
          id?: number
        }
        Update: {
          cd_marca?: number
          ds_nome?: string
          id?: number
        }
        Relationships: []
      }
      sis_empresas: {
        Row: {
          ds_apelido: string | null
          ds_cnae: string | null
          ds_documento: string
          ds_fantasia: string | null
          ds_inscricao_municipal: string | null
          ds_integration_key: string | null
          ds_municipio: string | null
          ds_nome: string | null
          ds_razao_social: string | null
          ds_uf: string | null
          ds_url: string | null
          dt_ativacao: string | null
          dt_created: string
          dt_inativacao: string | null
          dt_updated: string
          id: string
          id_escritorio: string | null
          id_externo: string | null
          is_ativo: boolean | null
          is_escritorio: boolean
        }
        Insert: {
          ds_apelido?: string | null
          ds_cnae?: string | null
          ds_documento: string
          ds_fantasia?: string | null
          ds_inscricao_municipal?: string | null
          ds_integration_key?: string | null
          ds_municipio?: string | null
          ds_nome?: string | null
          ds_razao_social?: string | null
          ds_uf?: string | null
          ds_url?: string | null
          dt_ativacao?: string | null
          dt_created?: string
          dt_inativacao?: string | null
          dt_updated?: string
          id: string
          id_escritorio?: string | null
          id_externo?: string | null
          is_ativo?: boolean | null
          is_escritorio?: boolean
        }
        Update: {
          ds_apelido?: string | null
          ds_cnae?: string | null
          ds_documento?: string
          ds_fantasia?: string | null
          ds_inscricao_municipal?: string | null
          ds_integration_key?: string | null
          ds_municipio?: string | null
          ds_nome?: string | null
          ds_razao_social?: string | null
          ds_uf?: string | null
          ds_url?: string | null
          dt_ativacao?: string | null
          dt_created?: string
          dt_inativacao?: string | null
          dt_updated?: string
          id?: string
          id_escritorio?: string | null
          id_externo?: string | null
          is_ativo?: boolean | null
          is_escritorio?: boolean
        }
        Relationships: [
          {
            foreignKeyName: "sis_empresas_id_escritorio_fkey"
            columns: ["id_escritorio"]
            isOneToOne: false
            referencedRelation: "sis_empresas"
            referencedColumns: ["id"]
          },
        ]
      }
      sis_grupos_tributarios: {
        Row: {
          ds_nome: string
          id: string
          id_emb_empresas: string
        }
        Insert: {
          ds_nome: string
          id: string
          id_emb_empresas: string
        }
        Update: {
          ds_nome?: string
          id?: string
          id_emb_empresas?: string
        }
        Relationships: []
      }
      sis_ibge_uf: {
        Row: {
          ds_state: string
          ds_state_clean: string | null
          ds_uf: string
          dt_created: string
          dt_updated: string
          id: number
        }
        Insert: {
          ds_state: string
          ds_state_clean?: string | null
          ds_uf: string
          dt_created?: string
          dt_updated?: string
          id: number
        }
        Update: {
          ds_state?: string
          ds_state_clean?: string | null
          ds_uf?: string
          dt_created?: string
          dt_updated?: string
          id?: number
        }
        Relationships: []
      }
      sis_igbe_city: {
        Row: {
          ds_city: string
          ds_city_clean: string | null
          dt_created: string
          dt_updated: string
          id: number
          id_ibge_uf: number
        }
        Insert: {
          ds_city: string
          ds_city_clean?: string | null
          dt_created?: string
          dt_updated?: string
          id: number
          id_ibge_uf: number
        }
        Update: {
          ds_city?: string
          ds_city_clean?: string | null
          dt_created?: string
          dt_updated?: string
          id?: number
          id_ibge_uf?: number
        }
        Relationships: [
          {
            foreignKeyName: "sis_igbe_city_id_ibge_uf_fkey"
            columns: ["id_ibge_uf"]
            isOneToOne: false
            referencedRelation: "sis_ibge_uf"
            referencedColumns: ["id"]
          },
        ]
      }
      sis_integracao: {
        Row: {
          ds_descricao: string | null
          ds_nome: string
          dt_created: string
          dt_updated: string
          fl_is_para_escritorio: boolean | null
          fl_is_para_sistema: boolean | null
          id: string
          id_tipo_integracao: string
        }
        Insert: {
          ds_descricao?: string | null
          ds_nome: string
          dt_created?: string
          dt_updated: string
          fl_is_para_escritorio?: boolean | null
          fl_is_para_sistema?: boolean | null
          id: string
          id_tipo_integracao: string
        }
        Update: {
          ds_descricao?: string | null
          ds_nome?: string
          dt_created?: string
          dt_updated?: string
          fl_is_para_escritorio?: boolean | null
          fl_is_para_sistema?: boolean | null
          id?: string
          id_tipo_integracao?: string
        }
        Relationships: [
          {
            foreignKeyName: "sis_integracao_id_tipo_integracao_fkey"
            columns: ["id_tipo_integracao"]
            isOneToOne: false
            referencedRelation: "sis_tipo_integracao"
            referencedColumns: ["id"]
          },
        ]
      }
      sis_integracao_campos: {
        Row: {
          ds_campo_nome: string
          ds_campo_ordem: number
          ds_campo_placeholder: string | null
          ds_campo_tipo: string
          dt_created: string
          dt_updated: string
          id: string
          id_integracao: string
        }
        Insert: {
          ds_campo_nome: string
          ds_campo_ordem: number
          ds_campo_placeholder?: string | null
          ds_campo_tipo: string
          dt_created?: string
          dt_updated: string
          id: string
          id_integracao: string
        }
        Update: {
          ds_campo_nome?: string
          ds_campo_ordem?: number
          ds_campo_placeholder?: string | null
          ds_campo_tipo?: string
          dt_created?: string
          dt_updated?: string
          id?: string
          id_integracao?: string
        }
        Relationships: [
          {
            foreignKeyName: "sis_integracao_campos_id_integracao_fkey"
            columns: ["id_integracao"]
            isOneToOne: false
            referencedRelation: "sis_integracao"
            referencedColumns: ["id"]
          },
        ]
      }
      sis_integracao_config: {
        Row: {
          ds_valores_config: Json
          dt_created: string
          dt_updated: string
          id: string
          id_integracao: string
          id_sis_empresas: string
        }
        Insert: {
          ds_valores_config: Json
          dt_created?: string
          dt_updated: string
          id: string
          id_integracao: string
          id_sis_empresas: string
        }
        Update: {
          ds_valores_config?: Json
          dt_created?: string
          dt_updated?: string
          id?: string
          id_integracao?: string
          id_sis_empresas?: string
        }
        Relationships: [
          {
            foreignKeyName: "sis_integracao_config_id_integracao_fkey"
            columns: ["id_integracao"]
            isOneToOne: false
            referencedRelation: "sis_integracao"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "sis_integracao_config_id_sis_empresas_fkey"
            columns: ["id_sis_empresas"]
            isOneToOne: false
            referencedRelation: "sis_empresas"
            referencedColumns: ["id"]
          },
        ]
      }
      sis_municipio_ambiente_nacional: {
        Row: {
          ds_ibge_codigo: string
          ds_nome: string
          ds_uf: string
          dt_created: string
          dt_updated: string
          id: string
          is_ativo: boolean
        }
        Insert: {
          ds_ibge_codigo: string
          ds_nome: string
          ds_uf: string
          dt_created?: string
          dt_updated: string
          id: string
          is_ativo?: boolean
        }
        Update: {
          ds_ibge_codigo?: string
          ds_nome?: string
          ds_uf?: string
          dt_created?: string
          dt_updated?: string
          id?: string
          is_ativo?: boolean
        }
        Relationships: []
      }
      sis_origem_cst: {
        Row: {
          ds_codigo: string | null
          ds_descricao: string
          dt_created: string
          dt_updated: string
          id: string
        }
        Insert: {
          ds_codigo?: string | null
          ds_descricao: string
          dt_created?: string
          dt_updated?: string
          id: string
        }
        Update: {
          ds_codigo?: string | null
          ds_descricao?: string
          dt_created?: string
          dt_updated?: string
          id?: string
        }
        Relationships: []
      }
      sis_profiles: {
        Row: {
          ds_email: string
          ds_name: string | null
          dt_created: string | null
          dt_updated: string
          id: string
          is_admin: boolean
          is_confirmed: boolean
        }
        Insert: {
          ds_email: string
          ds_name?: string | null
          dt_created?: string | null
          dt_updated?: string
          id: string
          is_admin?: boolean
          is_confirmed?: boolean
        }
        Update: {
          ds_email?: string
          ds_name?: string | null
          dt_created?: string | null
          dt_updated?: string
          id?: string
          is_admin?: boolean
          is_confirmed?: boolean
        }
        Relationships: []
      }
      sis_profiles_notificacoes: {
        Row: {
          cd_tipo: Database["public"]["Enums"]["tipos_notifacoes"]
          ds_descricao: string | null
          ds_titulo: string
          dt_created: string
          dt_updated: string
          id: string
          id_profile: string
        }
        Insert: {
          cd_tipo: Database["public"]["Enums"]["tipos_notifacoes"]
          ds_descricao?: string | null
          ds_titulo: string
          dt_created?: string
          dt_updated?: string
          id: string
          id_profile: string
        }
        Update: {
          cd_tipo?: Database["public"]["Enums"]["tipos_notifacoes"]
          ds_descricao?: string | null
          ds_titulo?: string
          dt_created?: string
          dt_updated?: string
          id?: string
          id_profile?: string
        }
        Relationships: [
          {
            foreignKeyName: "sis_profiles_notificacoes_id_profile_fkey"
            columns: ["id_profile"]
            isOneToOne: false
            referencedRelation: "sis_profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      sis_regimes_tributarios: {
        Row: {
          ds_crt: Database["public"]["Enums"]["CrtType"] | null
          ds_descricao: string
          dt_created: string
          dt_updated: string
          emb_empresasId: string | null
          id: string
        }
        Insert: {
          ds_crt?: Database["public"]["Enums"]["CrtType"] | null
          ds_descricao: string
          dt_created?: string
          dt_updated?: string
          emb_empresasId?: string | null
          id: string
        }
        Update: {
          ds_crt?: Database["public"]["Enums"]["CrtType"] | null
          ds_descricao?: string
          dt_created?: string
          dt_updated?: string
          emb_empresasId?: string | null
          id?: string
        }
        Relationships: [
          {
            foreignKeyName: "sis_regimes_tributarios_emb_empresasId_fkey"
            columns: ["emb_empresasId"]
            isOneToOne: false
            referencedRelation: "emb_empresas"
            referencedColumns: ["id"]
          },
        ]
      }
      sis_simples_nacional: {
        Row: {
          cd_simples: number
          ds_nome: string
          id: string
        }
        Insert: {
          cd_simples: number
          ds_nome: string
          id: string
        }
        Update: {
          cd_simples?: number
          ds_nome?: string
          id?: string
        }
        Relationships: []
      }
      sis_tipo_integracao: {
        Row: {
          ds_nome: string
          dt_created: string
          dt_updated: string
          id: string
        }
        Insert: {
          ds_nome: string
          dt_created?: string
          dt_updated: string
          id: string
        }
        Update: {
          ds_nome?: string
          dt_created?: string
          dt_updated?: string
          id?: string
        }
        Relationships: []
      }
      sis_tipos_produto: {
        Row: {
          ds_codigo: string | null
          ds_descricao: string
          dt_created: string
          dt_updated: string
          id: string
        }
        Insert: {
          ds_codigo?: string | null
          ds_descricao: string
          dt_created?: string
          dt_updated?: string
          id: string
        }
        Update: {
          ds_codigo?: string | null
          ds_descricao?: string
          dt_created?: string
          dt_updated?: string
          id?: string
        }
        Relationships: []
      }
      sis_tipos_servicos: {
        Row: {
          ds_codigo: string | null
          ds_descricao: string
          dt_created: string
          dt_updated: string
          id: string
        }
        Insert: {
          ds_codigo?: string | null
          ds_descricao: string
          dt_created?: string
          dt_updated?: string
          id: string
        }
        Update: {
          ds_codigo?: string | null
          ds_descricao?: string
          dt_created?: string
          dt_updated?: string
          id?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      CadastroTipo:
        | "REGIME_TRIBUTARIO"
        | "SEGMENTO_EMPRESA"
        | "PRODUTO_SEGMENTO"
        | "TIPO_PRODUTO"
        | "ORIGEM_CST"
        | "CST"
        | "CFOP"
      CrtType: "SIMPLES" | "NORMAL" | "MEI"
      ModuleType:
        | "ADMINISTRATIVO"
        | "CONTABILIDADE"
        | "FINANÇAS"
        | "FATURAMENTO"
        | "ESTOQUES"
        | "RECURSOS_HUMANOS"
        | "CONTROLADORIA"
        | "SISTEMA"
        | "ADM_SISTEMA"
        | "ADM_ESCRITORIO"
        | "ADM_EMPRESA"
        | "FISCAL"
        | "EMBARCADOR"
      NfseOrigem: "PREFEITURA" | "ESTEIRA" | "DOMINIO" | "XML"
      OrigemExtracao: "DFE_SIEG" | "DFE_TECNOSPEED_TOMADOS"
      StatusDocumento:
        | "DIGITADO"
        | "IMPORTADO"
        | "EM_AUTENTICACAO"
        | "EMITIDO"
        | "AGUARDANDO_VALIDACAO"
        | "AGUARDANDO_INTEGRACAO"
        | "DIGITADO_EMPRESA"
        | "RECEBIDO_EMPRESA"
        | "INTEGRACAO_ESCRITA"
        | "DIGITADO_FISCAL"
        | "CONFERIDO_FISCAL"
        | "ANULADO"
        | "CANCELADO"
        | "NAO_PROCESSADO"
        | "PROCESSADO"
        | "EM_PROCESSAMENTO"
      StatusExtracao: "ERRO" | "IMPORTADO" | "INTEGRADO"
      StatusFornecedor: "NOVO" | "ATIVO" | "INATIVO"
      StatusProduto: "ATIVO" | "INATIVO"
      TipoCentroCustos: "SINTÉTICO" | "ANALÍTICO"
      TipoConsumoIntegracao:
        | "NFSE_TOMADOS_TECNOSPEED"
        | "API_DOMINIO"
        | "NFSE_SIEG"
        | "NFE_SIEG"
        | "CTE_SIEG"
      TipoDocumento: "NFSE" | "CTE" | "NFE" | "CFE" | "NFCE"
      TipoEf: "ENTRADA" | "SAIDA"
      tipos_notifacoes: "WARN" | "INFO" | "SUCCESS" | "ERROR" | "DEBUG"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {
      CadastroTipo: [
        "REGIME_TRIBUTARIO",
        "SEGMENTO_EMPRESA",
        "PRODUTO_SEGMENTO",
        "TIPO_PRODUTO",
        "ORIGEM_CST",
        "CST",
        "CFOP",
      ],
      CrtType: ["SIMPLES", "NORMAL", "MEI"],
      ModuleType: [
        "ADMINISTRATIVO",
        "CONTABILIDADE",
        "FINANÇAS",
        "FATURAMENTO",
        "ESTOQUES",
        "RECURSOS_HUMANOS",
        "CONTROLADORIA",
        "SISTEMA",
        "ADM_SISTEMA",
        "ADM_ESCRITORIO",
        "ADM_EMPRESA",
        "FISCAL",
        "EMBARCADOR",
      ],
      NfseOrigem: ["PREFEITURA", "ESTEIRA", "DOMINIO", "XML"],
      OrigemExtracao: ["DFE_SIEG", "DFE_TECNOSPEED_TOMADOS"],
      StatusDocumento: [
        "DIGITADO",
        "IMPORTADO",
        "EM_AUTENTICACAO",
        "EMITIDO",
        "AGUARDANDO_VALIDACAO",
        "AGUARDANDO_INTEGRACAO",
        "DIGITADO_EMPRESA",
        "RECEBIDO_EMPRESA",
        "INTEGRACAO_ESCRITA",
        "DIGITADO_FISCAL",
        "CONFERIDO_FISCAL",
        "ANULADO",
        "CANCELADO",
        "NAO_PROCESSADO",
        "PROCESSADO",
        "EM_PROCESSAMENTO",
      ],
      StatusExtracao: ["ERRO", "IMPORTADO", "INTEGRADO"],
      StatusFornecedor: ["NOVO", "ATIVO", "INATIVO"],
      StatusProduto: ["ATIVO", "INATIVO"],
      TipoCentroCustos: ["SINTÉTICO", "ANALÍTICO"],
      TipoConsumoIntegracao: [
        "NFSE_TOMADOS_TECNOSPEED",
        "API_DOMINIO",
        "NFSE_SIEG",
        "NFE_SIEG",
        "CTE_SIEG",
      ],
      TipoDocumento: ["NFSE", "CTE", "NFE", "CFE", "NFCE"],
      TipoEf: ["ENTRADA", "SAIDA"],
      tipos_notifacoes: ["WARN", "INFO", "SUCCESS", "ERROR", "DEBUG"],
    },
  },
} as const
